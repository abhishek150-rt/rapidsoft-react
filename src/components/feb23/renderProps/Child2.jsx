import React,{Component } from "react";

export default class Child2 extends Component{
   
    render(){
        return(
            <>
              
                <button onClick={this.props.count}>Count me</button>
            </>
        )
    }
}