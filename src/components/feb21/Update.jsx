// 2.Updating Phase

import React, { Component } from "react";

export default class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Updating Phase"
        }
    }
    // 1.static getDerivedStateFromProps()
    // static getDerivedStateFromProps(props) {
    //     console.log("1---static phase");
    //     return { message: props.message }
    // }

    // 2.shouldComponentUpdate
    shouldComponentUpdate() {
        console.log("2----should component update");
        console.log(this.getSnapshotBeforeUpdate());
        return true
    }

    // Function to change message
    componentDidMount = () => {
        this.setState({
            message: "Message has been changed"
        })
    }

    // 4. getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate = (prevState, prevProps) => {
        console.log("previous message = " + prevState.message);
        const previous= prevState.message
        return previous
    }

    // 5. componentDidUpdate
    componentDidUpdate = () => {
        console.log("new message = " + this.state.message);
    }

    render() {
        console.log("3-----render phase")
        return (
            <>
                <p style={{ textAlign: "center" }}>{this.state.message}</p>
                {/* <button onClick={this.changeMessage}>Change Message</button> */}
            </>
        )
    }
}