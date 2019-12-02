import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import css from './Navigation.css'


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

            <Link className= "navLink" to={ROUTES.HOME} style={{textDecoration: 'none'}} >Home</Link> |
            <Link className= "navLink" to={ROUTES.CONTACT} style={{textDecoration: 'none'}}> Contact </Link> |
            <Link className= "navLink" to={ROUTES.ADMINNEWSLETTER} style={{textDecoration: 'none'}}> Newsletter</Link> |
            <Link className= "navLink" to={ROUTES.ADMIN} style={{textDecoration: 'none'}}> Admin</Link> |
            <SignOutButton />
    </div>
    </div>
);
const NavigationNonAuth = () => (
    <div > 
   <div style={{textAlign: 'right', marginTop: '10px', color: '#00ff001C'}}>
       <Link className= "navLink" to={ROUTES.HOME} style={{textDecoration: 'none'}} >Home</Link> |
       <Link className= "navLink" to={ROUTES.CONTACT} style={{textDecoration: 'none'}}> Contact </Link> |
       <Link className= "navLink" to={ROUTES.NEWSLETTER} style={{textDecoration: 'none'}}> Newsletter</Link>
            </div>
    </div>
);


export default Navigation;