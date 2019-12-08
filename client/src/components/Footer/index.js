import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import {AuthUserContext} from "../Session";

//Footer is dependant on if user is logged in or not.
// If they are not signed in it displays the sign in link.
//If the user is signed in it just shows the standard text.
const Footer = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <FooterAuth /> : <FooterNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const FooterNonAuth = () => (
    <div style={{color:  '#2E4158', textAlign: 'center'}}>
        <br></br>
        Copyright 2019 Forward Growth | Are you a team member? <Link to={ROUTES.SIGN_IN}>Sign In Here</Link>

    </div>
);

const FooterAuth = () => (
    <div style={{color:  '#2E4158', textAlign: 'center'}}>
        <br></br>
        Copyright 2019 Forward Growth

    </div>
);
export default Footer;

