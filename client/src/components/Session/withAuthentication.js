
import React from 'react';


import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

//Explanation and walk through of components can be found at:
//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
//Code in this file was borrowed from this source



const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser: null,
            };
        }
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser
                        ? this.setState({ authUser })
                        : this.setState({ authUser: null });
                },
            );
        }
        componentWillUnmount() {
            this.listener();
        }

        render() {

            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }
    return withFirebase(WithAuthentication);
};
export default withAuthentication;