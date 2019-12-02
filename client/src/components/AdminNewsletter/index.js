import React from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatefulNewsLetterAdmin from './StatefulNewsletterAdmin.js'
import {AuthUserContext, withAuthorization} from "../Session";

function AdminNewsletter() {

        return (
            <AuthUserContext.Consumer>
                {authUser => (
                     <StatefulNewsLetterAdmin/>
                    )}
            </AuthUserContext.Consumer>
          );


}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AdminNewsletter);