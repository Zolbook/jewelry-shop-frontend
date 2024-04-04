import { useState } from "react";
import React from 'react';

export default function Counter (){
 const [counter, setCounter] = useState(0);
 const increaseButton =()=>{
    setCounter(counter +1);
 }

 const decreaseButton =()=>{
setCounter(counter-1);
 }


 return (
    <div>
        <button className="btn1" onClick={increaseButton}>+</button>
        {counter}
        <button className= "btn2" onClick={decreaseButton} disabled={counter===0}>-</button>
    </div>
 );
}