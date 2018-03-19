import React from 'react';


const UserItem = props => {
    return (
            <li class="collection-item avatar">
                <img src={props.picture.thumbnail} alt="" class="circle"/>
                <span class="title">{props.name.first}</span>
                <p>email: {props.email}<br/> date of birth: {props.dob}</p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
     
    )
  }

export default UserItem;