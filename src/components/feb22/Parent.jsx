import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';
export class Parent extends Component {
    constructor() {
        super()
        this.state = {
            message: "Message"
        }

    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                message: "This is the message from the parent."
            })
        }, 2000);
        console.log("*******Parent Compoent*********** ")
    }
    render() {
       
        return (
            <>
                <PureComp message={this.state.message} />
                <RegularComp message={this.state.message} />
                <MemoComp message={this.state.message}/>
            </>
        )
    }
}

export default Parent