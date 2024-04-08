import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import '../componentsStyle/SignUp.css'
import axios from 'axios'


function SignUp() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signup', {email, password, user})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div >
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
            <input name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">
                <strong>Password</strong>
            </label>
            <input name="password" placeholder="Create New Password" onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="user">
                <strong>Username</strong>
            </label>
            <input name="user" placeholder="Create Username" onChange={(e) => setUser(e.target.value)}/>
            <br/>
            <button type="submit" className="submitButton">Sign up</button>
            </form>

            <div className="checkOther">
            <label>Have an account?</label>
            <Link to="/login"><button>Login</button></Link>
            </div>
        </div>
    )
}

export default SignUp