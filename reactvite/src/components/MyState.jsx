import React from 'react'
import { useState } from 'react'

function myState() {
    const[counter, setCounter] = useState(10);
    function incrementCounter() {
        setCounter(counter + 10);
    }
    function decrementCounter() {
        setCounter(counter - 5);
    }
  return (
    <div >
      <button onClick={decrementCounter}>Decrement</button>
      <h2>Counter = {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div> 
  )
}

export default myState
