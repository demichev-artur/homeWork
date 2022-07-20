import React, {useState} from "react";

const CountAppendTree = () => {
    const [countDefault, setCount] = useState(0);
    return(
        <div>
            <button onClick={() => setCount(countDefault+1)}>+1</button>
            <button onClick={() => setCount(countDefault+5)}>+5</button>
            <button onClick={() => setCount(countDefault+10)}>+10</button>
            <button onClick={() => setCount( 0)}>Clear</button>
            <p>{countDefault}</p>
        </div>
    )
}

export default CountAppendTree;