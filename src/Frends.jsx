import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }
    ,[]);

    const friendsStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }


    return(
        <div style = {friendsStyle}>
            <h2>friends: {friends.length} </h2>
            {
                friends.map(friend => <Friend friend = {friend} ></Friend>)
            }
        </div>
    )
}