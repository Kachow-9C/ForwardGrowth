import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Contact from '../Contact';
import Newsletter from '../Newsletter'
import Footer from "../Footer";

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const App = () => (
    <Router>
        <div>
            <Row style={{backgroundColor: '#2E4158', width: '101%'}}> 
                <Col>
                    <Header />
                </Col>
                    
                <Col>
                    <Navigation />
                </Col>
            </Row>
            
            <hr />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.CONTACT} component={Contact}/>
            <Route path={ROUTES.NEWSLETTER} component={Newsletter}/>
            <div style={{backgroundColor: '#F8F8FF'}}>
                <Footer />
            </div>
    
            
        </div>
    </Router>
    
);
export default withAuthentication(App);