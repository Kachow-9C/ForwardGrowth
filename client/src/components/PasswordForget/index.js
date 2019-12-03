import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
const PasswordForgetPage = () => (
    <div>
        <PasswordForgetForm />
    </div>
);
const INITIAL_STATE = {
    email: '',
    error: null,
};
class PasswordForgetFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        var flag = 0;
        const { email } = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })

            .catch(error => {
                this.setState({ ...INITIAL_STATE });
                alert("This email does match a Forward Growth account")
                flag++;

            })
            .finally(() => {
                if (flag === 0)
                    alert("Forgot Password Email Sent! Please Check Your Inbox")

            });


        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <Container>
            <h3 style={{color:'#2E4158', marginTop: '30px'}}> Forgot Password </h3>
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                <Form.Label style={{color:'#2E4158'}}>Email Address</Form.Label>
                <Form.Control
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                />
                </Form.Group>
                <Button variant='info'  style={{backgroundColor: '#293A4E', color: '#293A4E'}} size="lg" type="submit">
                        Reset My Password
                    </Button>
                {error && <p>{error.message}</p>}
            </Form>
            </Container>
            
        );
    }
}
const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };