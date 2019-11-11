import React from 'react';
import { withFirebase } from '../Firebase';
import './button.css'
const SignOutButton = ({ firebase }) => (
    <button type="button" className="Button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);
export default withFirebase(SignOutButton);