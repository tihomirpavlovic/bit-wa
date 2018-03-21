import React from 'react';
import UserItem from "./UserItem.js"

const UserList = props => {
    console.log(props)
    return (
        <ul className="collection">{props.userData.map(user => {
           return <UserItem gender={user.gender} picture={user.photo} name={user.name} email={user.email} birth={user.birth} key={Math.random()}/>
        })}</ul>
    )
  }

  export default UserList;