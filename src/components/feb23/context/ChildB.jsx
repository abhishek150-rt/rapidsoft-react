import React, { Component } from 'react'
import ChildC from './ChildC'
export default class ChildB extends Component {
    render() {
        return (
            <>
                <p>This is child -B</p>
                <ChildC/>
            </>
        )
    }
}
