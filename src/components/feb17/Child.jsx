// import React from 'react'

// const Child = (props) => {
//     return (
//         <button onClick={()=>props.func("Hello from child component")}>
//             greet parent
//         </button>
//     )
// }

// export default Child

import React, { Component } from "react";
export default class Child extends Component {
    render() {
        return (
            <button onClick={() => this.props.func("Hello from child component")}>greet parent</button>
        )
    }
}