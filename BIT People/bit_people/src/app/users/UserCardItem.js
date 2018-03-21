import React from 'react';
import protect_email from "../../shared/utils/formatEmail.js"
import formatDate from "../../shared/utils/formatDate.js"
import "./User.css"

const UserCardItem = props => {
    return (
        
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img alt="" src={props.picture}/>
                        <span className="card-title">{props.name}</span>
                        </div>
                        <div className={props.gender === "female" ? "lighten-5" : ""}>
                    <div className="card-content">
                        <p>email: {protect_email(props.email)}<br/>Birth date: {formatDate(props.birth)}</p>
                    </div>
                    </div>
            </div>
        </div>
            )
          }
          
export default UserCardItem;