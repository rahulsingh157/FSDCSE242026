import React, { useEffect, useState } from 'react'

function MyUseEffect(){
    const[counter, setCounter] = useState(0);
    const[pointer, setPointer] = useState(100);

    function increaseCounter(){
        setCounter(counter+10);
    }

    function decreasePointer(){
        setPointer(pointer-5);
    }

    useEffect(()=>{
        // console.log("hii..using useEffect");
        console.log("Counter ="+counter);
        console.log("Pointer ="+pointer);
    },[pointer,counter])

  return (
    <div>
      <h2>Counter APP</h2>
      <h1 style={{color:'red'}}>Counter Value = {counter}</h1>
      <h1 style={{color:'green'}}>Pointer Value = {pointer}</h1>

      <button onClick={increaseCounter}>Counter</button>
      <button onClick={decreasePointer}>pointer</button>
    </div>
  )
}

export default MyUseEffect
