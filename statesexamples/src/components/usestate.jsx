import React from "react";
import { useState } from "react";

const StateExample = () =>{
    // let counter = 0;
    const [counter, setCounter] = useState(0);
    const increment = ()=>{
        // counter = counter + 1;
        // console.log(counter);

        // setCounter(3);
        setCounter(counter + 1);
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default StateExample;