import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';


const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <div style={{textAlign: 'center'}}>

            <Link to={ROUTES.HOME}>Home</Link> |
            <Link to={ROUTES.NEWSLETTER}>Newsletter</Link> |
            <Link to={ROUTES.ACCOUNT}>Account</Link> |
            <Link to={ROUTES.CONTACT}> Contact </Link> |
            <Link to={ROUTES.POST}> New Post </Link> |
            <SignOutButton />
    </div>
);
const NavigationNonAuth = () => (
   <div style={{textAlign: 'center'}}>
            <Link to={ROUTES.HOME}>Home</Link> |
            <Link to={ROUTES.CONTACT}> Contact </Link> |
            <Link to={ROUTES.NEWSLETTER}>Newsletter</Link>


    </div>
);
export default Navigation;