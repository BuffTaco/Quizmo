import '../App.css'
import { Link } from "react-router-dom"
function Home() {
    return (
        <>
        <h1>Home</h1>
        <Link to="/"><button>Back</button></Link>
        <Link to="/testCard"><button>Card</button></Link>
        </>
    )

}

export default Home