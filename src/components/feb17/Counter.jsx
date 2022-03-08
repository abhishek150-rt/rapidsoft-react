import { Component } from "react";
export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Callback function")
        })
    }
    render() {
        return (
            <>
                <h3>Count-{this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}