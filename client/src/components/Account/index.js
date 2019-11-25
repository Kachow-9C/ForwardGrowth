import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import FormFile from '../NewsPost/FormFile.js';
import Container from 'react-bootstrap/Container'

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h2 className = "FormTitleContact"> Administrator Page </h2>
                <Container>
                    <h3 className='text-center' style={{color:'#fff'}}> Welcome: {authUser.email} </h3>
                </Container><br/><br/><br/><br/>
                <PasswordForgetForm /><br/><br/><br/><br/>
                <PasswordChangeForm /><br/><br/><br/><br/>
                <FormFile/>
            </div>
            
        )}
    </AuthUserContext.Consumer>
            

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);