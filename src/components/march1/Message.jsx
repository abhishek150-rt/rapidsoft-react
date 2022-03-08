import React from 'react'
import { useReducer, createContext } from 'react'
import Greeting from './Greeting'
const messageContext = React.createContext();
const initialMessage = {
    sms: "Here We will get greeting message dynamically using useReducer and useContext"
}
const reducer = (state, action) => {
    switch (action.type) {
        case "morning":
            return { ...state, sms: "Good Morning" };
        case "afternoon":
            return { ...state, sms: "Good Afternoon" };
        case "evening":
            return { ...state, sms: "Good Evening" };
        case "night":
            return { ...state, sms: "Good Night" };
    }
}

const Message = () => {

    const [state, dispatch] = useReducer(reducer, initialMessage);
      return (
        <>
         
            <messageContext.Provider value={state.sms}>
                <Greeting />
            </messageContext.Provider>
            <br></br>
            <button onClick={() => dispatch({ type: "morning" })}>Button-1</button>
            <br></br>
            <button onClick={() => dispatch({ type: "afternoon" })}>Button-2</button>
            <br></br>
            <button onClick={() => dispatch({ type: "evening" })}>Button-3</button>
            <br></br>
            <button onClick={() => dispatch({ type: "night" })}>Button-4</button>
        </>
    )
}

export default Message
export { messageContext }