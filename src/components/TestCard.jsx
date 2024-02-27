import '../Card.css'
import { useState } from 'react'

function TestCard() {
    const [activeness, setActiveness] = useState('not')
    return (
        <div className="cardContainer">
            <div className="card" onClick={() => {
                setActiveness(activeness == 'active' ? 'not' : 'active')
                }}  id={activeness}>
                <div  className="front">Front</div>
                <div className="back">Back</div>
            </div>
        </div>
    )
}
export default TestCard