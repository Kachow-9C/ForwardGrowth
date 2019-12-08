// Header: 
// Includes Title and Logo  

import React from 'react';
import './Header.css';
import logo from '../../assets/backpackLogo.png';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
// Header is placed inline with navigation bar.
const Header = () => (
    <div>
        <Link to={ROUTES.HOME} style={{textDecoration: 'none'}} > <header><img src={logo} alt="Logo"></img>Backpack Adventures</header></Link>
    </div>
);
export default Header;