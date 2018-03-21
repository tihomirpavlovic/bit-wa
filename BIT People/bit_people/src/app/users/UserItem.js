import React from 'react';
import protect_email from "../../shared/utils/formatEmail.js"
import formatDate from "../../shared/utils/formatDate.js"
import "./User.css"

const UserItem = props => {
  return (
    <li className="collection-item avatar">
      <div className={props.gender === "female" ? "lighten-5" : ""}>
      <img src={props.picture} alt="" className="circle" />
      <span className="title">{props.name}</span>
      <p><i className="tiny material-icons">email</i>email: {protect_email(props.email)}</p>
      <p><i className="tiny material-icons">cake</i>{formatDate(props.birth)}</p>
      </div>
    </li>
  )

}

export default UserItem;