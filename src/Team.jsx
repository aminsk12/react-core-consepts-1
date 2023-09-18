import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(0);

    const handelAdd =() =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handelRemove =() =>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }
     

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style = {teamStyle}>

        <h2>Players: {team} </h2>
        <button onClick={handelAdd} >Add</button>
        <button onClick={handelRemove} >Bad dow</button>
        </div>
    )
        
}