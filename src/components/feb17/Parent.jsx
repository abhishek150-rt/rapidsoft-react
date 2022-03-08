// import React, { useState } from 'react'
// import Child from './Child'
// const Parent = () => {
//     const [text, setText] = useState("Hello from Parent Component.")
//     const greet = (message) => {
//         setText(message);
//     }
//     return (
//         <div>
//             <Child func={greet} />
//             <h2>{text}</h2>
//         </div>
//     )
// }

// export default Parent

import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            text: "Hello from Parent Component"
        }
    }
    greet = (message) => {
        this.setState({
            text: message
        }, console.log(message))

    }
    render() {
        return (
            <div>
                <Child func={this.greet} />
                <h2>{this.state.text}</h2>
            </div>
        )
    }
}