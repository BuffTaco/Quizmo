import '../componentsStyle/MakeSet.css'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const NewCard = ({handleAdd}) => {
    const [term, setTerm] = useState("")
    const [def, setDef] = useState("")

    
    
    return (
        <div className='addNewCard'>
            <form onSubmit={(event) => {event.preventDefault(); handleAdd(term, def)}}>
            <h3>New Term</h3>
            <input name="term" placeholder="Term" onChange={(e) => setTerm(e.target.value)}/>
            <input name="definition" placeholder="Definition" onChange={(e) => setDef(e.target.value)}/>
            <button>Add</button>
            </form>
        </div>
    )
}
const MakeSet = () => {
    const [divList, setDivList] = useState([]);
    const [terms, setTerms] = useState([])
    const [defs, setDefs] = useState([])

    const addDiv = (event) => {
        event.preventDefault()

        const newIndex = divList.length + 1
        const newDiv = <NewCard key={newIndex} handleAdd={handleAdd} />

        setDivList(prevList => [...prevList, newDiv])
    }
    const handleAdd = (term, def) => {
        setTerms(pastTerms => [...pastTerms, term])
        setDefs(pastDefs => [...pastDefs, def])


    }
    const handleSubmit = (list) => {
        
        console.log("submit")
        for (const item in list) {
            console.log(list[item])
        }
    }
    return <>
    <div>
        <h1 className="title">Create new set</h1>
        <form className="createSet" onSubmit={(event) =>{event.preventDefault(); handleSubmit(divList)}}>
        <button id="createNew">Create set</button>
            <div>
            <label htmlFor="setTitle">Set title:</label>
            <input id="setTitle" name="setTitle" placeholder="Enter Title"/>
            </div>
            <div>
                <label htmlFor="desc">Description:</label>
                <input id="desc" name="desc" placeholder="Enter Description"/>
            </div>
            
            <button onClick={addDiv}>New card</button>
            
            
            
            
        </form>
        {divList.map((elem, index) => <div key={index}>{elem}</div>)
            }
    </div>
    </>
}
export default MakeSet