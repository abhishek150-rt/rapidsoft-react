
import React, { Component } from "react";
export default class RegularComp extends Component {
  
    shouldComponentUpdate(){
        return true;
    }
    componentDidUpdate(){
        console.log("regular component updated successfully");
    }
    render() {
      
        return <p>2.{this.props.message}</p>
    }
}