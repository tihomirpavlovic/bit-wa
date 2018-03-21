import React from 'react';
import { Link } from "react-router-dom"

const Header = props => {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/home" className="brand-logo">BIT People</Link>
                    <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link></li>
                        {props.location === "/home"
                            ? <React.Fragment>
                                <li><a onClick={props.changeView}><i className="material-icons">{props.icon ? "view_module" : "view_list"}</i></a></li>
                                <li><a onClick={props.refresh}><i className="material-icons">refresh</i></a></li>
                            </React.Fragment>
                            : ""}
                    </ul>
                </div>
            </nav>
            <div className="row">
                <div className="input-field col s12">
                    <input id="search"  placeholder="Search" type="search" className="validate"/>
                        <label htmlFor="search"></label>
            </div>
                </div>
      </React.Fragment>
            );
        }
        
        export default Header;
        
        
        
