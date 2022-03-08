import React, { Component } from "react";
export default class RefDemo extends Component {
    constructor() {
        super()
        this.state = {
            message: "Something...."
        }
        // 1. Create a ref
        this.Ref = React.createRef();
    }

    handleClick = () => {
        this.Ref.current.style.color = "red";
        this.setState({
            message: this.Ref.current.innerText
        })

    }
    render() {
        return (
            <>

                {/* Assigning ref to an <p> element */}
                <p ref={this.Ref}>Hello This is paragraph with ref sttribute</p>
                <p>{this.state.message}</p>
                <br />
                <button onClick={this.handleClick}>Click me</button>
            </>
        )
    }

}