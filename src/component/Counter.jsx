import {React, useState, useEffect} from "react";

// const[count, setCount] = useState(0);
const Counter = ()=>{
    let data = false
    const[count, setCount] = useState(1);
    const[show, shoeSpan] = useState(false);
    function add(){
        setCount(count+1);
    }
    function sub(){
       
        if(count>0){
        setCount(count-1);
        }
      
    }
    useEffect(()=>{
        
        if(count==0){
            shoeSpan(false)
        }
        else{
            shoeSpan(true)
        }
    },[count])
    return(
        <div>
            <h1>count value is this -  {count}</h1>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button><br />
            {!show && <span>It connot be DECREASE </span>}
        </div>
    )
}
export default Counter
