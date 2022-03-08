import React from 'react'
import ThirdComp from './thirdComp'

const SecondComp = ({text}) => {

  console.log("Second component rendered")

  return (
    <>
      <div  className='comp'>{text}
    
    </div>
    <ThirdComp/>
    </>

  )
}

export default SecondComp