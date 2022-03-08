import React, { Component } from 'react'
import ChildD from './ChildD'
import { UserConsumer } from "./userContext"

export default class ChildC extends Component {
    render() {
        return (
            <>
                <p>I am ChildC, and I am a consumer & I am getting props from parent.</p>
                <UserConsumer>
                    {
                        (message) => {
                            return <p>{message}</p>
                        }
                    }
                </UserConsumer>
                <ChildD />

            </>
        )
    }
}
