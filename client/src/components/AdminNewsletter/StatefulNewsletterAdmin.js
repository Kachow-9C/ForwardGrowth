import React, { Component } from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

import './index.css';
import { CardFooter } from 'react-bootstrap/Card';


class StatefulNewsletterAdmin extends Component{
    constructor(){
        super();
        this.state = {newsletters: []}
    }

    componentDidMount() {
        fetch('/api/newsletters')
        .then(res => {return res.json()})
        .then(newsletters => {
            newsletters = newsletters.reverse()
            this.setState({ newsletters })
        })
    }

    deletePost(id){
        fetch('/api/newsletters/delete/' + id,{
            method : 'DELETE',

        }).then(res=>res)
    }

    render(){
        
        return(

              <div className = "App__Form__Full">
        
                <h2 className = "newsletterTitle"> Newsletter </h2>
                {this.state.newsletters.map(newsletter => 
                    <div style={{display: 'flex', justifyContent: 'center' }}>
                        <Card className = 'text-center' style={{width: '75rem',backgroundColor: '#293A4E', color: 'whitesmoke', marginBottom: '50px'}}>
                            <Card.Body>
                                <Card.Title>{newsletter.title}</Card.Title>
                                <Card.Text>
                                    {newsletter.content}
                                </Card.Text>
                                <Card.Text className='text-left'>
                                From: {newsletter.author}<br/>      
                                <i>Date: {newsletter.created_at}</i>
                                </Card.Text>
                                <Card.Text className = 'text-right'>
                                <Button variant='danger' size="lg" href='/adminnewsletter'  onClick={this.deletePost.bind(this, newsletter._id)}>
                                    Delete
                                 </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 
                )}
              </div>

        );
    }
}
export default StatefulNewsletterAdmin;