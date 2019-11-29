import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';


const Navigation = () => (
    <div style={{marginTop: '15px', backgroundColor: '#2E4158', marginRight: '20px'}}>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <div> 

    <div style={{textAlign: 'right', marginTop: '10px', color: '#00ff001C'}}>

            <Link to={ROUTES.HOME} style={{color: 'white', marginRight: '5px'}}>Home</Link> |
            <Link to={ROUTES.NEWSLETTER} style={{color: 'white', marginRight: '5px', marginLeft: '5px'}}>Newsletter</Link> |
            <Link to={ROUTES.ACCOUNT} style={{color: 'white', marginRight: '5px', marginLeft: '5px'}}>Account</Link> |
            <Link to={ROUTES.CONTACT} style={{color: 'white', marginLeft: '5px'}}> Contact </Link> |
            <SignOutButton />
    </div>
    </div>
);
const NavigationNonAuth = () => (
    <div > 
   <div style={{textAlign: 'right', marginTop: '10px', color: '#00ff001C'}}>
            <Link to={ROUTES.HOME} style={{color: 'white', marginRight: '5px'}}>Home</Link> |
            <Link to={ROUTES.CONTACT} style={{color: 'white', marginRight: '5px', marginLeft: '5px'}}> Contact </Link> |
            <Link to={ROUTES.NEWSLETTER} style={{color: 'white', marginLeft: '5px'}}>Newsletter</Link>

            </div>
    </div>
);


export default Navigation;