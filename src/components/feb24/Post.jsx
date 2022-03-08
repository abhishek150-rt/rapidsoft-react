import React, { Component } from "react";
import axios from "axios";
export default class Post extends Component {
    constructor(props) {
        super(props)

        // Set state variables 
        this.state = {
            userID: "",
            title: "",
            body: ""
        }
    }

    // function for input field
    handleClick = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // Function for form submission
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", this.state);
            console.log(response);
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        const { userID, title, body } = this.state;
        return (
            <>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>

                        <input type="text" name="userID" value={userID} onChange={this.handleClick} placeholder="enter your id" />
                        <br />

                        <input type="text" name="title"  value={title} onChange={this.handleClick} placeholder="enter your title" />
                        <br />

                        <input type="text" name="body" value={body} onChange={this.handleClick} placeholder="enter your text" />
                        <br />
                        <button type="submit">Submit </button>
                    </form>
                </div>
            </>
        )
    }
}