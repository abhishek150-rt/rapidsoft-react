import React, { Component } from "react";
export default class Child extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Abhishek"
      }
     
    }

    render() {
        return (
            <>{this.props.func("Abhishek")}</>
        )
    }
} 