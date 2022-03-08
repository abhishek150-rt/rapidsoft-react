import React, { useState, useEffect } from 'react'

const UseStateHook = ({ message }) => {

    // set initial state of component
    const [greeting, setGreeting] = useState(message);
    const [x, SetX] = useState(0)
    const [y, SetY] = useState(0)

    //Change state of component
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            SetX(e.clientX);
            SetY(e.clientY);
        });
        console.log("Mouse moves")
    },[]);
    return (
        <>
            <h4>{greeting}</h4>
            <h3>X-Cords:{x} and Y-Cords:{y}</h3>

        </>
    )
}

export default UseStateHook