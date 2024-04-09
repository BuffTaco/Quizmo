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

app.post('/signup', (req, res) => {
    const {email, password, user} = req.body
    bcrypt.hash(password, 10).then(hash => {
        UserModel.create({email, password: hash, username: user})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
    
})
app.post('/login', (req, res) => {
    const {email, password}  = req.body
    UserModel.findOne({email: email})
    .then(user => {
        
        
        if (user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if (response) {
                    
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

app.listen(3001, () => {
    console.log('Server is running')
})