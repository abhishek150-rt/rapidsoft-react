import React, { Component } from 'react'

export default class Stateful extends Component {
  render() {
    
    //Props Destructring
    const { name, aka } = this.props;
    return (
      <>
        <h2>
          I am {name} a.k.a {aka}
        </h2>
      </>
    )
  }
}
