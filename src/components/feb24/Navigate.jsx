import React, { Component } from 'react'

export default class Navigate extends Component {
  render() {
    return (
      <>
       
          <button onClick={this.props.func}>{this.props.innertext}</button>
      
      </>
    )
  }
}
