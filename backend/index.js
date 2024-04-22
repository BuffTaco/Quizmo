require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)

//process signup request
app.post('/signup', (req, res) => {
    const {email, password, user} = req.body
    //create new user w/ hashed password, save in database
    bcrypt.hash(password, 10).then(hash => {
        UserModel.create({email, password: hash, username: user})
        .then(users => res.json(users))
        .catch(err => {
            
            if (err instanceof mongoose.Error.ValidationError)
            {res.status(403).json("Duplicate Username")}
            else {
                res.json(err)
            }
            
        })
    }).catch(err => console.log(err.message))
    
})
//process login requets
app.post('/login', (req, res) => {
    const {email, password}  = req.body
    //find user w/ email
    UserModel.findOne({email: email})
    .then(user => {
        
        //confirm correct password
        if (user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if (response) {
                    
                    //create/send token and user in response
                    const userForToken = {
                        email: email,
                        password: password,
                        username: user.username
                    }

                    const token = jwt.sign(
                        userForToken,
                        process.env.SECRET
                    )
                    res.status(200).send({token, username: user.username, email: email})
            
            }
                else{res.status(401).json("Incorrect password")}
            })
            
        }
        else {
            return res.status(401).json("Invalid user")
        }
    })
})
app.get('/users', (req, res) => {
    UserModel.find({}).then(users => res.json(users))
})
//add new set
app.post('/sets', (req, res) => {
    
})

app.listen(3001, () => {
    console.log('Server is running')
})