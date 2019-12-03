import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { passwordOne } = this.state;
        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const { passwordOne, passwordTwo, error } = this.state;

        return (
            
            <Container>
            <h3 style={{color:' #2E4158'}}> Change Password </h3>
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                <Form.Label style={{color:' #2E4158'}}>New Password</Form.Label>
                <Form.Control
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                />
                </Form.Group>
                <Form.Group>
                <Form.Label style={{color:' #2E4158'}}>Confirm New Password</Form.Label>
                <Form.Control
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                />
                </Form.Group>
                <Button variant='info'  style={{backgroundColor: '#4d9dc9', color: 'white'}} size="lg" type="submit">
                        Change My Password
                    </Button>
                {error && <p>{error.message}</p>}
            
            </Form>
            </Container>
        );
    }
}
export default withFirebase(PasswordChangeForm);