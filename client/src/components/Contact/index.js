import React from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button  } from 'react-bootstrap';

function Contact() {


        return (
            <div className="App">
              <div className = "App__Form__Full">
        
                <h2 className = "FormTitleContact"> Meet the Team </h2>
        
                <Container>
                  <Row className = "FormRow" >
                    <Col className = "Contact_Description" sm={4}> Qanisha Madison </Col>
                    <Col className = "Contact_Description" sm={8}> Description of Quanisha's background:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Col>
                  </Row>
        
                  <Row className = "FormRow">
                    <Col className = "Contact_Description" sm={8}>Description of Dev #1's background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </Col>
                    <Col className = "Contact_Description" sm={4}> Dev #1</Col>
                  </Row>
        
                  <Row className = "FormRow">
                    <Col className = "Contact_Description" sm={4}> Dev #2 </Col>
                    <Col className = "Contact_Description" sm={8}> Description of Dev #2's background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Col>
                  </Row>
                </Container>
        
                <Container> 
                  <h6 className = "FormTitleContact"> Let us know what you think! </h6>
                    <Form> 
                      <Row className = "Contact__Form__Display"> 
                        <Col>
                          <Form.Control placeHolder = "First Name" />
                        </Col>
                        <Col>
                          <Form.Control placeHolder = "Last Name" />
                        </Col>
                      </Row>
                      <Row className = "Contact__Form__Display">
                        <Form.Control placeHolder = "Email" />
                      </Row>
                      <Row className = "Contact__Form__Display">
                        <Form.Label> Message </Form.Label>
                        <Form.Control as ="textarea" rows="3" />
                      </Row>
                    </Form>
                      <Button variant="info" size="lg" block>
                        Sumbit
                      </Button>
                </Container>
              </div>
            </div>
          );


}

export default Contact;
