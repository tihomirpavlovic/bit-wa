import React from 'react';
import UserItem from "./userItem.js"
import userData from "../../usersData.js"

const UserList = props => {
    return (
        <ul>{userData.map(element => {
           return <UserItem picture={element.picture.thumbnail} name={element.name.first} email={element.email} birth={element.dob} key={1}/>
        })}</ul>
    )
  }

  export default UserList;