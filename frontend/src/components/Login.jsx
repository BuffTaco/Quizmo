import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'
import '../componentsStyle/SignUp.css'
import renderApp from '../index'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {console.log(result)

                
                window.localStorage.setItem('loggedUser', JSON.stringify(result))
                renderApp(true)
                navigate('/home')
    })
        .catch(err => {console.log(err)
        if (window.localStorage.getItem('loggedUser') != null)
        window.localStorage.removeItem('loggedUser')
        })

    }
    return (
        <div>
            <Link to="/"><button className="topLeft">Main</button></Link>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
            <input id="email" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">
                <strong>Password</strong>
            </label>
            <input id="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
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