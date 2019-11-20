import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

const Footer = () => (
    <div style={{color: 'white', textAlign: 'center'}}>
        Copyright Kachow! Development Team | <Link to={ROUTES.SIGN_IN}>Sign In</Link>

    </div>
);
export default Footer;