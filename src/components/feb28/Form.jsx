import React, { useReducer } from "react";
import { useState } from "react";

// Initial values for employee form fields
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

//Reducer fucntion for updating form field
const reducer = (state, action) => {
  return { ...state, [action.input]: action.value };
};



//statring point of form component
const Form = () => {
  const [employee, dispatch] = useReducer(reducer, initialState);
  const [error,setError]=useState("");


  //Handle fucntion for handling input fields
  const handleChange = (e) => {
    // object destructring
    const { name, value, checked } = e.target;
    const action = {
      input: name,
      value: name === "terms" ? checked : value,
    };
    dispatch(action);
  };

  //function for handling focus
  const handleFocus = (e) => {
    console.log(`${e.target.name} get focus`);
  }


  // Function for validation
  const validateEmployee = (employee) => {
    return employee.password === employee.confirmPassword && employee.terms && employee.password.length > 5
  }


  // Function while form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmployee(employee)) {
      alert(`Hey ${employee.name} you have successfully registered yourself`)
    }
    else {
      setError("please fill all the field")
    }
  }



  return (
    <>
      <div className="container">
        <h4>Register Here</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={(e) => handleChange(e)}
            onMouseOver={e => handleFocus(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="checkbox"
            name="terms"
            id="terms"

            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="terms" style={{ padding: "0 5px" }}>
            I accept all the terms and conditions
          </label>
          <br />
          <button type="submit" className={!validateEmployee(employee) ? "disabled" : null} >Submit</button>
        </form>

      </div>
    </>
  );
};

export default Form;
