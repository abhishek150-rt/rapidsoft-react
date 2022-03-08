import React from 'react'

const Stateless = (props) => {

  //Props Destructuring
  const { name, aka } = props
  return (
    <>
      <h2>
        I am {name} a.k.a {aka}.
      </h2>
    </>
  )
}

export default Stateless