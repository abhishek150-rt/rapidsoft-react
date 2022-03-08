import React from 'react'

const MemoComp = (props) => {
    console.log("***********Memo Compoent updated successfully*******");
    return (
        
        <>

            <p>
                3.{props.message}
            </p>

        </>
    )
}

export default React.memo(MemoComp);
