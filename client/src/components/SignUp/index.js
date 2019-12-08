import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import {AuthUserContext, withAuthorization} from "../Session";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';



//Sign up only accessible when logged in
const SignUpPage = () => (
    <div>
        <h2 className = "FormTitleContact" style={{color: '#01579b', marginTop: '30px'}}>Register New User </h2>
        <SignUpForm />

    </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .doPasswordReset(email)
            .then(
                alert("Account Successfully Created!")
            )

            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.SIGN_IN);

            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        //authUser function and AuthUserContext used to restrict access to logged in users only
        return (
            <Container>
            <AuthUserContext.Consumer>
                {authUser => (
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group>
                        
                        <Form.Control
                            name="username"
                            value={username}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Full Name"
                        />
                        </Form.Group>
                        <p></p>
                        <Form.Group>
                        <Form.Control
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
                        />
                        <p></p>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control
                            name="passwordOne"
                            value={passwordOne}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Password"
                        />
                        </Form.Group>
                        <p></p>
                        <Form.Group>
                        <Form.Control
                            name="passwordTwo"
                            value={passwordTwo}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Confirm Password"
                        />
                        </Form.Group>
                        <p></p>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <Button disabled={isInvalid} type="submit" style={{backgroundColor: '#2E4158', color: 'white', marginBottom: '20px'}} size="lg" type="submit">
                            Create New User
                        </Button>
                        </div>
                        {error && <p>{error.message}</p>}

                    </Form>
                    
                )}
           
            </AuthUserContext.Consumer>
            </Container>


        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(SignUpPage);
