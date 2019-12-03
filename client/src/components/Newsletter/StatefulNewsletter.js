import React, { Component } from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card} from 'react-bootstrap';

import './index.css';


class StatefulNewsletter extends Component{
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


    render(){
        
        return(
              <div className = "App__Form__Full">
        
                <h2 className = "newsletterTitle"> Newsletter </h2>
                {this.state.newsletters.map(newsletter => 
                    <div className = "postTitle" style={{display: 'flex', justifyContent: 'center'}}>
                        <Card className = 'text-center postBox'>
                            <Card.Body>
                                <Card.Title>{newsletter.title}</Card.Title>
                                <Card.Text>
                                    {newsletter.content}
                                </Card.Text>
                                <Card.Text className='text-left'>
                                From: {newsletter.author}<br/>      
                                <i>Date: {newsletter.created_at}</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div> 
                )}
              </div>
        );
    }
}
export default StatefulNewsletter;