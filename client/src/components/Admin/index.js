import React from 'react';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import FormFile from '../NewsPost/FormFile.js';
import Container from 'react-bootstrap/Container'
import DeletePost from '../DeletePost/DeletePost.js';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";


const AdminPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h2 style={{marginBottom: '30px', textAlign:'center', marginTop: '45px', color: '#01579b', fontSize: '70px', fontWeight:'300'}}> Administrator Console</h2>
                <Container>
                    <h3 className='text-center' style={{color:'#2E4158'}}> Welcome: {authUser.email} </h3>
                </Container><br/><br/><br/><br/>
                <PasswordChangeForm /><br/>
                <Container>
                    <h5 className='text-center' style={{color:'#2E4158'}}>Want to add another team member? <Link to={ROUTES.SIGN_UP}>Create a New Account</Link></h5>
                </Container>
                <br/><br/><br/>

                <FormFile/>
            </div>

        )}
    </AuthUserContext.Consumer>


);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AdminPage);