import React from 'react';
import './Header.css';
import PropTypes from "prop-types";

const Header = (props)=>{
    return (
        <div>
            <p className="seka">{props.headerTitle}</p>
        </div>
    );
  }

  Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
 }

 Header.defaultProps = {
    headerTitle: "Seka Aleksic"
 }
 
 

  export default Header;