import React,{Component} from 'react';

export default class ChildComp extends Component{
    render(){
       if (this.props.hero==="Joker") {
           throw new Error("error")
       }
       return <p>{this.props.hero}</p>
    }
}