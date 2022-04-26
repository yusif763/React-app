import React from "react";
import { useState , useEffect} from "react";

function Calculator(){
    const [num, setNum] = useState(0);
    function increment(){
        console.log("a");
        setNum((n) => n + 1);
    }
    function decrement(){
        console.log("b");
        setNum(num - 1);
    }



    // useEffect(() => {
    //     console.log("state mount")
    // },[])
    // useEffect(() => {
    //     console.log("state updated")
    // },[num])
   
    return(
        <>
            <h1>Calculator</h1>

            <p>{num}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Calculator