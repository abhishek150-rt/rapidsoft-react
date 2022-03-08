import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import SecondComp from './secondComp';

const FirstComp = () => {
    const [state, setState] = useState("click me");
    const [message, setMessage] = useState("secondComp")
    const handleClick = useCallback(() => {
        setState("I am clicked");
        setMessage("secondComp is changed.")
    }, []);


  
    console.log("First component rendered");
   
    return (
        <>
            <div className='comp'>firstComp


            </div>
            <SecondComp text={message} />
            <button onClick={handleClick}>{state}</button>
        </>
    )
}

export default FirstComp