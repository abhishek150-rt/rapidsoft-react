import React, { Component } from 'react'
import ChildComp from './ChildComp'
import ErrorComp from './ErrorComp'

export default class ParentComp extends Component {
    render() {
        return (
            <>
                {/* 1st Chldern */}
                <ErrorComp>
                    <ChildComp hero="Bruce Banner" />
                </ErrorComp>

                {/*2nd Chldern */}
                <ErrorComp>
                    <ChildComp hero="Thor" />
                </ErrorComp>


                {/*3rd Chldern */}
                <ErrorComp>
                    <ChildComp hero="Joker" />
                </ErrorComp>

            </>
        )
    }
}
