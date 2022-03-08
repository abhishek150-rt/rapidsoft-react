import React, { Component } from "react";
import { UserProvider } from "./userContext";
import ChildA from "./ChildA";
export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello From the parent container"
        }
    }
    handleClick = () => {
        setTimeout(() => {
            this.setState({
                message: "Message has been changed by the parent."
            })
        }, 3000)
    }
    render() {
        return (
            <>
                <h1>This is parent Component</h1>
                <UserProvider value={this.state.message}>
                    <ChildA />
                </UserProvider>
                <button onClick={this.handleClick}>Click me </button>
            </>
        )
    }
}