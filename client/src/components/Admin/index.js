import React from 'react';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import FormFile from '../NewsPost/FormFile.js';
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";


const AdminPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h2 className = "FormTitleContact"> Administrator Console</h2>
                <Container>
                    <h3 className='text-center' style={{color:'#fff'}}> Welcome: {authUser.email} </h3>
                </Container><br/><br/><br/><br/>
                <PasswordChangeForm /><br/>
                <Container>
                    <h3 className='text-center' style={{color:'#fff'}}>Want to add another team member? <Link to={ROUTES.SIGN_UP}>Create a New Account</Link></h3>
                </Container>
                <br/><br/><br/>

                <FormFile/>
            </div>

        )}
    </AuthUserContext.Consumer>


);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AdminPage);