import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.ref = React.createRef();
    }
    handleClick() {
        this.ref.current.focus()
    }
    render() {
        return (
            <>
                <h1><u>ParentComp</u></h1>
                <ChildComp ref={this.ref} />
                <br></br>
                <button onClick={this.handleClick.bind(this)}>Focus Now</button>
            </>
        )
    }
}
