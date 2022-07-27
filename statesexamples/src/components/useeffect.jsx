import React , {useEffect} from "react";

import axios from "axios";
import { useState } from "react";

function EffectExample(){
    const [data, setData] = useState("");
    useEffect(()=>{
        // console.log("Hello worlddddd");
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            setData(response.data[0].email);
            // console.log(response.data);
            console.log("Calling the api how many times")
        })
    })
    return (
        <div>
            <p>Hello worrrlllddd {data}</p>
        </div>
    )
}
export default EffectExample;