import React, {useState} from "react";

const ClickMe = () => {
    const [text, setText] = useState(false);
    return(
        <div>
            <button onClick={() => setText(!text)}>Click me</button>
            <p>{text ? 'Click' : 'No Click'}</p>
        </div>
    )

}

export default ClickMe;