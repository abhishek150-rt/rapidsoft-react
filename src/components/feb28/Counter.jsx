// Import useReducer hooks
import React, { useReducer } from "react";
const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state,count: state.count + action.payload };

        case "decrement":
            return { ...state, count: state.count - action.payload };

        case "reset":
            return initialState;

        default:
            return state;
    }
};
const Counter = () => {
    // create initial state and funtion
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h4>Count - {state.count}</h4>
            <button onClick={() => dispatch({ type: "increment", payload: 5 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    );
};

export default Counter;
