import React, { Component } from 'react'

export default class Record extends Component {
    render() {
        if (this.props.count > 3) {
            throw new Error("error");
        }
        return (
            <>
                <p> You've clicked button {this.props.count} times. </p>
            </>
        )
    }
}
