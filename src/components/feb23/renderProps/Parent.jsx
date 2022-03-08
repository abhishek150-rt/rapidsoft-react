import React, { Component } from "react";
import Child from "./Child";
import Child2 from "./Child2";
export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    // Function to greet
    greeting = (name) => {
        return <h2>Hi my name is {name}</h2>
    }

    // function to count
    count = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <>
                {/* Greet Function is passed to first child component */}
                <Child func={this.greeting} />
                <p>Button has been clicked {this.state.num} times</p>

                {/* Count Function is passed to second child component */}
                <Child2 count={this.count} />
            </>
        )
    }
} 