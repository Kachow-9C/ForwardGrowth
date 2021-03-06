// Home page: 
// Includes app name, description, carousel of pictures, blurb, links to apple/play store, and feedback form

import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import app_preview1 from '../../assets/screenshots/app-preview1.jpg';
import app_preview2 from '../../assets/screenshots/app-preview2.jpg';
import app_preview3 from '../../assets/screenshots/app-preview3.jpg';
import app_preview4 from '../../assets/screenshots/app-preview4.jpg';
import app_preview5 from '../../assets/screenshots/app-preview5.jpg';
import app_store_badge from '../../assets/app-store-badge.png';
import google_play_badge from '../../assets/google-play-badge.png'
import * as emailjs from 'emailjs-com';
import { Container, Form, Button } from 'react-bootstrap';
import { FormGroup, Input } from 'reactstrap';
import './Home.css';

class Home extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        }

        // Submit feedback form
        handleSubmit(e) {
            e.preventDefault()
            const { name, email, subject, message } = this.state
            let templateParams = {
              from_name: email,
              to_name: 'Quanisha',
              subject: subject,
              message_html: message,
            }
            // KEEP TEMPLATE AND USER ID SECURE
            emailjs.send(
            'gmail',
            '<TEMPLATE_ID>',
            templateParams,
            '<USER_ID>'
        )
            alert("Message Sent");
            this.resetForm()
        }
        // reset form to blanks after you hit submit
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

    render () {
        return (
            <React.Fragment>
                <div>
                    <p className = 'heading'> Welcome to Backpack Adventures</p>
                    <p className='summary'>
                        A gaming app that  will teach about the fundamentals of budgeting and traveling!
                    </p>
                </div>

                <div className='carousel'>
                    <Carousel showArrows={true} autoPlay={true}>
                        <div>
                            <img src={app_preview1} alt='app-preview1'/>
                        </div>
                        <div>
                            <img src={app_preview2} alt='app-preview2'/>
                        </div>
                        <div>
                            <img src={app_preview3} alt='app-preview3'/>
                        </div>
                        <div>
                            <img src={app_preview4} alt='app-preview4'/>
                        </div>
                        <div>
                            <img src={app_preview5} alt='app-preview5'/>
                        </div>
                    </Carousel>
                </div>

                <br></br>

                <div>
                    <p className='company-description'>
                        Forward Growth is company that focuses on providing a service for educational applications to tutoring and early learning resources. This company was created to bridge the gap between financial literacy and youth. Our commitment is to better serve lower income families with the ability to learn about saving money.
                    </p>
                </div>


                <br></br>

                <div className='download'>

                    <a href="https://www.apple.com/ios/app-store/" target="_blank">
                    <img alt="App Store Button" style={{width: '150px', height: '62px'}} src={app_store_badge}/>
                    </a>
                    <a href="https://play.google.com" target="_blank">
                    <img alt="Play Store Button" style={{width: '175px', height: '80px'}} src={google_play_badge} />
                    </a>
                </div>

            <hr/>

            {/* Feedback form starts */}
            <div className = "App__Form__Full">

            <Container>
                <h6 className = "FormTitleContact"> Let us know what you think! </h6>
                <Form onSubmit = {this.handleSubmit.bind(this)}>

                    {/* Name information */}
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

                        {/* Email information */}
                        <FormGroup controlId="formBasicEmail">
                        <Form.Label> Email </Form.Label>
                            <Input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange = {this.handleChange.bind(this, 'email')}
                            placeholder="jane@example.com"
                            />
                        </FormGroup>

                    {/* Subject Information */}
                    <FormGroup controlId="formBasicSubject">
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

                    {/* Message Information  */}
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

                    {/* Submit button, after clicked an alert should pop up confirming submission */}
                    <Button variant="info" style={{backgroundColor: '#4d9dc9', color: '#293A4E'}}size="lg" block type="submit">
                    Submit
                    </Button>
                    </Form>
            </Container>
            </div>
            </React.Fragment>
    );
  }
}

export default Home;
