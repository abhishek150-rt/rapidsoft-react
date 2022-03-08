import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { messageContext } from './Message'

const Greeting = () => {
    const [color, setColor] = useState({
        color: "black"
    })
    const newContext = React.useContext(messageContext);

    useEffect(() => {
        if (newContext === "Good Morning") {
            setColor({
                color: "#e7e724"
            })
        }
        else if (newContext === "Good Afternoon") {
            setColor({
                color: "orange"
            })
        }
        else if (newContext === "Good Evening") {
            setColor({
                color: "green"
            })
        }
        else {
            setColor({
                color: "black"
            })
        }
    },[newContext])

    return (

        <>

            <h3 style={color}>{newContext}</h3>

        </>
    )
}

export default Greeting