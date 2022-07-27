import React from "react";

const StateExample = () =>{
    let counter = 0;
    const increment = ()=>{
        counter = counter + 1;
        console.log(counter);
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default StateExample;