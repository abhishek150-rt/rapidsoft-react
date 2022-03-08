import React, { Component } from 'react'
const style = {
    color: "red",
    textAlign: "center"
}
export default class ErrorComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    // This method help us to show fallback ui in case of some error
    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    // This method help us to log error
    componentDidCatch(error, info) {

        console.log(error, info);
    }
    render() {
        return this.state.hasError ? (
            <div style={style}>
                <h3>App have crashed....</h3>
            </div>
        ) : (
            this.props.children
        );
    }
}
