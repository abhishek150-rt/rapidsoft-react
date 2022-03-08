import React, { useRef} from "react";

export default function Tooltip(props) {
    // Initialized a hook to hold the reference to the title div.
    const titleRef = useRef();
    const changeTitle = () => {
        titleRef.current.textContent = "Updated title"
    }

    const toggleTitle = () => {
        titleRef.current.textContent = "Original title"
    }
    return <div className="container">
        {/** The reference to the element happens here **/}
        <div className="title" ref={titleRef} onMouseEnter={changeTitle} onMouseLeave={toggleTitle}>Original title</div>
    </div>
}