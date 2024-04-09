import '../App.css'
import { Link, useNavigate } from "react-router-dom"
import renderApp from '../index'
function Home() {
    const navigate = useNavigate()
    const logout = () => {
        window.localStorage.removeItem('loggedUser')
        renderApp(false)
        navigate('/login')

    }
    return (
        <>
        <button className="topLeft" onClick={logout}>Logout</button>
        <h1>Home</h1>
        
        <Link to="/"><button>Back</button></Link>
        <Link to="/testCard"><button>Card</button></Link>
        </>
    )

}

export default Home