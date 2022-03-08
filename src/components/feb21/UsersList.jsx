import React, { Component } from 'react'

export default class UsersList extends Component {
    render() {
        return (
            <ul>{this.props.name}</ul>
        )
    }
}
