
import React, { PureComponent } from "react";
export default class PureComp extends PureComponent {
    componentDidUpdate(){
        console.log("pure component updated successfully");
    }
    render() {
       
        return <p>1.{this.props.message}</p>
    }
}