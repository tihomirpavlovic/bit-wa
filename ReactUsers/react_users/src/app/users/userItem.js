import React from 'react';


const UserItem = props => {
    return (
            <li class="collection-item avatar">
                <img src={props.picture.thumbnail} alt="" className="circle"/>
                <span className="title">{props.name.first}</span>
                <p>email: {props.email}<br/> date of birth: {props.dob}</p>
                <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
     
    )
  }

export default UserItem;