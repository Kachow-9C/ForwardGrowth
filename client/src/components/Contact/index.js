import React, { Component } from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as emailjs from 'emailjs-com';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import Quanisha from '../Contact/quanisha.png';

 class Contact extends Component {

    state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    }

    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
          from_name: email,
          to_name: 'Qunisha',
          subject: subject,
          message_html: message,
        }
        emailjs.send(
          'gmail',
          'template_78l3DL6t',
          templateParams,
          'user_cTiJAySIfLMZmueqFFH7w'
        )
        this.resetForm()
    }

      resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }

      handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

  render() {
        return (
            <div className="App">

              <div className = "App__Form__Full">
        
                <h2 className = "FormTitleContact"> Meet the Team </h2>
        
                <Container>
                  <Row className = "FormRow" >
                    
                    <Col className = "Contact_Description" sm={4}>     
                    {/* FIX-ME: Get the edges for the image rounded  */}
                      <img src={Quanisha} style={{width:'60%', borderWidth: '1', borderRadius: '150', overflow: 'hidden'}}></img>               
                      <Col> Qanisha Madison</Col>
                    </Col>

                    <Col className = "Contact_Description" sm={8}> Quanisha Madison is a student who is currently pursuing a degree in Business Administration at Santa Fe College in Gainesville, Florida. She taught app design at The Gainesville Girls Rock Camp. She also worked as an Activity Leader in an after school program. She attended The Gainesville Dev Academy, a 12-week bootcamp course for the programming language Swift. Quanisha Madison written an article for the Gainesville Sun “Overcoming A Fear of Failure Is Key To Success.” </Col>
                  </Row>
        
                  {/* <Row className = "FormRow">
                    <Col className = "Contact_Description" sm={8}>Description of Dev #1's background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </Col>
                    <Col className = "Contact_Description" sm={4}> Dev #1</Col>
                  </Row> */}
              
                  {/* <Row className = "FormRow">
                    <Col className = "Contact_Description" sm={4}> Dev #2 </Col>
                    <Col className = "Contact_Description" sm={8}> Description of Dev #2's background: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Col>
                  </Row> */}
                </Container>
        
                <Container> 
                  <h6 className = "FormTitleContact"> Let us know what you think! </h6>
                    <Form onSubmit = {this.handleSubmit.bind(this)}>

                        <FormGroup controlId="formBasicName">
                          <Form.Label> Full Name </Form.Label>
                          <Input 
                          type="text"
                          name="name"
                          value={this.state.name}
                          className="text-primary"
                          onChange={this.handleChange.bind(this, 'name')}
                          placeholder = "Jane Doe"
                          />
                        </FormGroup>
                        
                           <FormGroup controlId="formBasicEmail">
                             <Form.Label> Email </Form.Label> 
                              <Input 
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange = {this.handleChange.bind(this, 'email')}
                              placeholder="janedoe@gmail.com"
                              />
                           </FormGroup>
                         

                      <FormGroup controlId="formBasicName">
                        <Form.Label> Subject </Form.Label>
                          <Input 
                          type="text"
                          name="subject"
                          value={this.state.subject}
                          className="text-primary"
                          onChange={this.handleChange.bind(this, 'subject')}
                          placeholder = "Place holder text"
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
                        placeholder="Message Placeholder text here"
                        />
                        </FormGroup>

                      <Button variant="info" style={{backgroundColor: '#5BD5C0', color: '#293A4E'}}size="lg" block type="submit">
                        Sumbit
                      </Button>
                      </Form>
                </Container>
              </div>
            </div>
          );
        }
}

export default Contact;