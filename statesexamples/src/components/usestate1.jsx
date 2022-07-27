import React from "react";
import { useState } from "react";
const StateTutorial = ()=>{
    const [inputValue, setInputValue] = useState("Ann");
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }
    return(
        <div>
            <input placeholder="Enter your name"></input>
            <p>{inputValue}</p>
        </div>
    )
}
export default StateTutorial;