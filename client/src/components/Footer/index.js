import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

const Footer = () => (
    <div style={{color: 'white', textAlign: 'center'}}>
        <br></br>
        Copyright 2019 Forward Growth | Are you a team member? <Link to={ROUTES.SIGN_IN}>Sign In Here</Link>

    </div>
);
export default Footer;