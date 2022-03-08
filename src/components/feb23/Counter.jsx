import React, { Component } from 'react'
import ErrorComp from './ErrorComp'
import Record from './Record'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <>
                <ErrorComp>
                    <Record count={this.state.count}/>
                    <button onClick={this.handleClick}>Click me</button>
                </ErrorComp>
            </>
        )
    }
}
