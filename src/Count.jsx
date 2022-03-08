import React, { Component } from 'react'
import ReactDom from "react-dom"
export default class Count extends Component {
    render() {
        return ReactDom.createPortal
            (
                <p>Here comes the output:{this.props.count}</p>,
                document.querySelector("#portal-root")
            )
    }
}
