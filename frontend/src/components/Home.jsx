import '../App.css'
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import renderApp from '../index'
import Cards from './Cards.jsx'
//user home page
function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/home')
    }, [])
    
    //logout, go to login page
    const logout = () => {
        window.localStorage.removeItem('loggedUser')
        renderApp(false)
        navigate('/login')

    }
    return (
        <>
        
        <button className="bottomLeft" onClick={logout}>Logout</button>
        <div className="top">
            <Link to="/makeset"><button>New Set</button></Link>
            <h1 className="title">Home</h1>
            
        </div>
        
        
        
        
        
        <Link to="/"><button>Back</button></Link>
        <Link to="/testCard"><button>Card</button></Link>
        <h3>Your sets:</h3>
        <div className="stacks">
        <Cards name="testingggggggggggggffffffffsdfsdfdsfds"/>
        <Cards name="2"/>
        <Cards name="9238u98u 13981u sadfijaoiewj"/>
        </div>
        
        </>
    )

}

export default Home