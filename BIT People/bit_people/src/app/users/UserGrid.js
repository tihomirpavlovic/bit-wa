import React from 'react';
import UserCardItem from "./UserCardItem.js"

const UserGrid = props => {
    console.log(props)
    return (
        <div className="row">{props.userData.map(user => {
           return <UserCardItem gender={user.gender} picture={user.photo} name={user.name} email={user.email} birth={user.birth} key={Math.random()}/>
        })}</div>
    )
  }

  export default UserGrid;