import React, { Component } from 'react';

class FormFile extends Component {
    constructor() {
        super();
        this.state = { title: '', content: ''};
    }

    addNews() {
        var listing = {
            title: this.title.value,
            content: this.title.value
        }
    }

    render() {
        return (
            <form>
                <label>Enter News Here:</label>
                <br></br>
                <br></br>
                <label>
                    Title:
                    <input type="text" placeholder="Enter Title" ref={(title) => this.title = title} />
                </label>
                <label>
                    Content:
                    <input type="text" placeholder="Enter Content" ref={(content) => this.content = content} />
                </label>
                <input className="Button" type="button" value="Add News" onClick={this.addNews.bind(this)}/>
            </form>
        );
    }
}
export default FormFile;