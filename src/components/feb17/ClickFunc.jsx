import React, { Component } from 'react'

export default class ClickFunc extends Component {
    constructor() {
        super()
        this.state = {
            message: "click me",
            style: {
                fontSize: "25px",
                color: "red"
            }
        }
    }

    //Simple functions need event binding
    click() {
        this.setState({
            message: "I am clicked"
        },console.log(this))
    }

    //Fat arrow function don't need event binding
    enter = () => {
        this.setState({
            style: {
                fontSize: "35px",
                color: "black"
            }
        },console.log(this))
    }
    render() {
        return (
            <>
                <button type="button" onClick={this.click.bind(this)} >{this.state.message}</button>
                <h3 onMouseEnter={this.enter} style={this.state.style}>Mouse Over me</h3>
            </>
        )
    }
}
