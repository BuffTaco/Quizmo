import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'
import '../componentsStyle/SignUp.css'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {console.log(result)
            if (result.data == "Success")
                navigate('/home')
    })
        .catch(err => console.log(err))

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
            <input name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">
                <strong>Password</strong>
            </label>
            <input name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button type="submit" className="submitButton">Login</button>

            </form>

            <div className="checkOther">
            <label >New user?</label>
            <Link to="/signup"><button>Sign up</button></Link>
            </div>
            
        </div>
    )
}
export default Login