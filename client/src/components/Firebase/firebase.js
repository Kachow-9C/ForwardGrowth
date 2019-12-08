import app from 'firebase/app';
import 'firebase/auth';

var rawConfig = require('../../config');
//Config variables defined in config file found in src
const config = {
    apiKey: rawConfig.firebase.REACT_APP_API_KEY,
    authDomain: rawConfig.firebase.REACT_APP_AUTH_DOMAIN,
    databaseURL: rawConfig.firebase.REACT_APP_DATABASE_URL,
    projectId: rawConfig.firebase.REACT_APP_PROJECT_ID,
    storageBucket: rawConfig.firebase.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: rawConfig.firebase.REACT_APP_MESSAGING_SENDER_ID,
    appId: rawConfig.firebase.REACT_APP_APP_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;
