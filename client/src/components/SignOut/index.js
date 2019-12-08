import React from 'react';
import { withFirebase } from '../Firebase';
import './button.css'
//Button component that shows up in navigation bar when logged in
const SignOutButton = ({ firebase }) => (
    <button type="button" className="Button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);
export default withFirebase(SignOutButton);