import React from "react";
import { useState } from "react";
const StateTutorial = ()=>{
    const [inputValue, setInputValue] = useState("Ann");
    return(
        <div>
            <input placeholder="Enter your name"></input>
            <p>{inputValue}</p>
        </div>
    )
}
export default StateTutorial;