
import React, { Component } from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as emailjs from 'emailjs-com';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FormGroup, Input } from 'reactstrap';
import Quanisha from '../Contact/quanisha.png';

class Contact extends Component {

render() {
      return (
            <div className = "App__Form__Full">

              <h2 className = "FormTitleContact"> Meet the Team </h2>

<<<<<<< HEAD
              <Container>
                <Row className = "FormRow" >
=======
  render() {
        return (

>>>>>>> e22ea33c1ed757ec2f2db00defa12e1b7520006f

                  <Col className = "Contact_Description" sm={4}>
                    <img src={Quanisha} style={{width:'60%', borderWidth: '1', borderRadius: '150', overflow: 'hidden', alt: "Quanisha Headshot"}}></img>
                    <Col style={{fontWeight: 'bold'}}> Quanisha Madison</Col>
                  </Col>

                  <Col className = "Contact_Description" sm={8}> Quanisha Madison is a student who is currently pursuing a degree in Business Administration at Santa Fe College in Gainesville, Florida. She taught app design at The Gainesville Girls Rock Camp. She also worked as an Activity Leader in an after school program. She attended The Gainesville Dev Academy, a 12-week bootcamp course for the programming language Swift. Quanisha Madison written an article for the Gainesville Sun “Overcoming A Fear of Failure Is Key To Success.” </Col>
                </Row>

              </Container>

<<<<<<< HEAD
            </div>

        );
      }
=======
                      <FormGroup controlId="formBasicName">
                        <Form.Label> Subject </Form.Label>
                          <Input 
                          type="text"
                          name="subject"
                          value={this.state.subject}
                          className="text-primary"
                          onChange={this.handleChange.bind(this, 'subject')}
                          placeholder = "Subject"
                          />
                        </FormGroup>

                        <FormGroup controlId="formBasicMessage">
                        <Form.Label> Message </Form.Label>
                        <Input 
                        type="textarea"
                        rows="3"
                        name="message"
                        className="text-primary"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, 'message')}
                        placeholder="Message"
                        />
                        </FormGroup>

                      <Button variant="info" style={{backgroundColor: '#5BD5C0', color: '#293A4E'}}size="lg" block type="submit">
                        Submit
                      </Button>
                      </Form>
                </Container>
              </div>
        

          );
        }
>>>>>>> e22ea33c1ed757ec2f2db00defa12e1b7520006f
}

export default Contact;
