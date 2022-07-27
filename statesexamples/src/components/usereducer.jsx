import React, { useState } from "react";

const ReducerExample = ()=>{
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
    return(
        <div>
            <h1>{count}</h1>
            <button onClick = {()=>{setCount(count+1);
            setShowText(!showText)}}> Click here</button>
            {showText && <p>You will see this</p>}
        </div>
    )
}
export default ReducerExample;