import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget';
import './SignIn.css';


const SignInPage = () => (
    <div>
        {/* <h1>SignIn</h1> */}
        <SignInForm />
        {/* <PasswordForgetLink /> */}
        {/* <SignUpLink /> */}
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
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
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <div className = "App">
                <div className = "App__Aside"></div>
                <div className = "App__Form">

                    <div className="FormTitle">
                        <a href = "#" className= "FormTitle__Link"> Sign In</a>
                    </div>

                    <div className="FormCenter">
                        <form className="FormFields" onSubmit={this.onSubmit}>
                            <div className="FormField">
                                <label className="FormField_Label" htmlFor="name">Email</label>
                                    
                                    <div><input
                                        id = "name" className = "FormField__Input"
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        type="text"
                                        placeholder="Enter Email Address"
                                    /></div>
                            </div>
                            <div className="FormField">
                                <label className="FormField_Label" htmlFor="name">Password</label>
                                <div><input
                                    id="name"
                                    className="FormField__Input"
                                    name="password"
                                    value={password}
                                    onChange={this.onChange}
                                    type="password"
                                    placeholder="Enter Password"
                            /></div>
                            </div>
                            <div className = "FormField"></div>
                                <button className = "FormField__Button mr-20" disabled={isInvalid} type="submit">
                                    Sign In!
                                </button>
                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                    <div>
                            <PasswordForgetLink />
                        </div>
                        <div>
                            <SignUpLink />
                        </div>
                </div>
            </div>
        );
    }
}
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };