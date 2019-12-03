import React, {Component} from 'react';
import '../Contact/contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


class DeletePost extends Component {
    constructor(){
        super();
        this.state = {newsletters:[]}
    }

    componentDidMount(){
        fetch('/api/newsletters')
        .then(res => {return res.json()})
        .then(newsletters => {
            newsletters = newsletters.reverse()
            this.setState({ newsletters })
        })
    }


    render(){

        return(
            <div className="App">
              <div className = "App__Form__Full">
        
                <h2 className = "FormTitleContact"> Delete Post </h2>
                {this.state.newsletters.map(newsletter => 
                    <div style={{display: 'flex', justifyContent: 'center' }}>
                        <Card className = 'text-center' style={{width: '75rem',color: '#293A4E', backgroundColor: '#5BD5C0', marginBottom: '50px'}}>
                            <Card.Body>
                                <Card.Title>{newsletter.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div> 
                )}
              </div>
            </div>
        );
    }
}
export default DeletePost;