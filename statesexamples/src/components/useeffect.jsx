import React , {useEffect} from "react";

import axios from "axios";

function EffectExample(){
    useEffect(()=>{
        // console.log("Hello worlddddd");
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            console.log(response.data);
        })
    })
    return (
        <div>
            <p>Hello worrrlllddd</p>
        </div>
    )
}
export default EffectExample;