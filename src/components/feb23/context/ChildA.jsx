import React, { Component } from 'react'
import ChildB from './ChildB'

export default class ChildA extends Component {
  render() {
    return (
      <>
          <p>This is child -A</p>
          <ChildB message={this.props.message}/>
      </>
    )
  }
}
