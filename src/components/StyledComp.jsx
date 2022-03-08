import styled from "styled-components";

// styled component for the input field
let Input = styled.input`
  width:100%;
  border: 1px solid gainsboro;
  border-radius:2px;
  display: block;
  outline: none;
  padding: 5px;
`
// styled component for the button 
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em;
  padding: 0.25em 1em;
`
const Text = styled.div`
 color: ${props => props.primary ? 'red' : 'green'};
background: white
`
const Row = styled.div`
   width: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: auto;

`
const Col = styled.div`
 display: flex;
  width: 30%;
  margin: 10px 0 0 0;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 2px 2px 5px grey;
  transition: all 2s;
  padding: 20px;
  @media screen and (max-width:950px) {
    width: 40%;
  }
`

const Error = styled.span`
color:red !important;
text-align:left !important;
font-size:14px
`
export { Input, Button, Text, Row, Col, Error }