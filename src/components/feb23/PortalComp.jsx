import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class PortalComp extends Component {
    render() {
        return (
            ReactDOM.createPortal(
                <button onClick={this.props.func}>Click me</button>,
                document.getElementById("portal-root")
            )
        )
    }
}

