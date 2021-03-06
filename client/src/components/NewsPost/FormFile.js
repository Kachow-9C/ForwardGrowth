import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class CreatePost extends Component {

    constructor(props){
        super(props)


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title:'',
            content:'',
            author:'',
            created_at:''

        }
    }


    onSubmit(e){
        var flag = 0;
        e.preventDefault();
        var message = 'You are missing the following fields: ';
        if (this.state.title === '') {
            message += 'Title ';
            flag++;
        }
        if (this.state.content === '') {
            message += 'Body ';
            flag++;
        }
        if (this.state.author === '') {
            message += 'Author';
            flag++;
        }
        if (flag === 0) {
            message = "Newsletter Entry Successfully Posted!"

            fetch('/api/newsletters/new', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'title': this.state.title,
                    'content': this.state.content,
                    'author': this.state.author,
                    'created_at': new Date().toLocaleString()
                })
            });
        }
        alert(message);

    };

    render(){
        return(
            <Container>
            <h2 className = "FormTitleContact"> Post to the Newsletter </h2>
            <div class='form-wrapper'>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Title">
                        <Form.Label style={{color:'#2E4158'}}>Title</Form.Label>
                        <Form.Control value={this.state.title} onChange={(e) => this.setState({title:e.target.value})} type="text"/>
                    </Form.Group>
                    
                    <Form.Group controlId="Content">
                        <Form.Label  style={{color:'#2E4158'}}>Body</Form.Label>
                        <Form.Control value={this.state.content} onChange={(e) => this.setState({content:e.target.value})} type="text"/>
                    </Form.Group>

                    <Form.Group controlId="Author">
                        <Form.Label style={{color:'#2E4158'}}>Author</Form.Label>
                        <Form.Control value={this.state.author} onChange={(e) => this.setState({author:e.target.value})} type="text"/>
                    </Form.Group>

                    <Button variant='info' style={{backgroundColor: '#4d9dc9', color: 'white'}} size="lg" type="submit">
                        Post
                    </Button>
                </Form>
            </div>
            </Container>
        );
    }
}
export default CreatePost;