import React from "react";
import { Link } from 'react-router-dom';

import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle, faHome } from "@fortawesome/free-solid-svg-icons";

const navBar = (props) => {
    return (
        <div className={classes.Container}>
            <div className = {classes.NavContainer}>
                <div className={classes.LogoContainer}>
                    <img src="" alt="Logo" ></img>
                </div>

                <div className={classes.LogoName} />

                <Link to="/" className={classes.NavBtn}>
                    <FontAwesomeIcon icon={faHome} />
                </Link>

                <Link to="/Home" className = {classes.NavBtn}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>

                <Link to="/login" className={classes.NavBtn}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </Link>
            </div>
        </div>
    );
}

export default navBar;