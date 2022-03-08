import React from 'react'
import useAdd from './Add'
const Output = () => {
    const result= useAdd(4,5)
  return (
    <div>{result}</div>
  )
}

export default Output