import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../axios';

export default function FriendsList() {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        axiosWithAuth().get(`http://localhost:5000/api/friends`)
          .then(response=>{
            setFriends(response.data);
          })
          .catch(error=>{
            console.error(error);
          });
      }, [])
    return(
        <div className="friends-list">
            {friends.map(friend=><p>{friend.name}</p>)}
        </div>
    )
}