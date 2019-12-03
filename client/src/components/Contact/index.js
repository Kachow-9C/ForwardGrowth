
import React, { Component } from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as emailjs from 'emailjs-com';
import { Container, Row, Col} from 'react-bootstrap';
// import { FormGroup, Input } from 'reactstrap';
import Quanisha from '../Contact/quanisha.png';
import Email from '../Contact/email_logo.png';
import Facebook from '../Contact/facebook_logo.png';
import Twitter from '../Contact/twitter_logo.png';


class Contact extends Component {

render() {
      return (
            <div className = "App__Form__Full">

              <h2 className = "FormTitleContact"> Meet the Team </h2>

              <Container>
                <Row className = "FormRow" >

                  <Col className = "Contact_Description" sm={4}>
                    <img alt="Quanisha Headshot" src={Quanisha} style={{width:'60%', borderWidth: '1', borderRadius: '150', overflow: 'hidden', alt: "Quanisha Headshot"}}></img>
                    <Col style={{fontWeight: 'bold'}}> Quanisha Madison</Col>
                  </Col>

                  <Col className = "Contact_Description" sm={8}> Quanisha Madison is a student who is currently pursuing a degree in Business Administration at Santa Fe College in Gainesville, Florida. She taught app design at The Gainesville Girls Rock Camp. She also worked as an Activity Leader in an after school program. She attended The Gainesville Dev Academy, a 12-week bootcamp course for the programming language Swift. Quanisha Madison written an article for the Gainesville Sun “Overcoming A Fear of Failure Is Key To Success.” </Col>
                </Row>

              <div style={{display:'flex', justifyContent:'center'}}>
                <Row>
                  <Col>
                    <a href="mailto:madisonquanisha11@gmail.com">
                    <img alt= "Email Icon" src={Email} style = {{width: '90px', height:'auto', marginBottom: '100px'}}></img>
                    </a>
                  </Col>
                  <Col>
                    <a href = "https://facebook.com">
                    <img alt="Facebook icon" src={Facebook} style ={{width: '90px', height:'auto'}}></img>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://twitter.com/quanishamadison">
                    <img alt="Twitter Icon" src={Twitter} style ={{width: '90px', height:'auto'}}></img>
                    </a>
                  </Col>
                </Row>
              </div>
        
                </Container>
        
            </div>

        );
      }
}

export default Contact;
