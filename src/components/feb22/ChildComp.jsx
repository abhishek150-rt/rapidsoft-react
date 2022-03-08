import React from 'react'

const ChildComp = React.forwardRef((props, ref) => {
    return (
        <input type="text" placeholder='Enter your name' ref={ref} />
    )
})

export default ChildComp