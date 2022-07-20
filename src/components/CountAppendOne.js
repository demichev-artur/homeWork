import React, {useState} from "react";

const CountAppendOne = () => {
    const [countDefault, setCount] = useState(0);
    return(
        <div>
            <button onClick={() => setCount(countDefault + 1)}>+1</button>
            <button onClick={() => setCount(countDefault - 1)}>-1</button>
            <p>{countDefault}</p>
        </div>
    )
}

export default CountAppendOne;