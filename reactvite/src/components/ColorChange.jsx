import React from 'react'
import { useState } from 'react'

function ColorChange() {
    const[red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const[blue, setBlue] = useState(0);
    
    function setColor1(){
        setRed(255);
        setGreen(0);
        setBlue(0);
    }
    function setColor2(){
        setRed(0);
        setGreen(255);
        setBlue(0);
    }
    function setColor3(){
        setRed(0);
        setGreen(0);
        setBlue(255);
    }
    
  return (
    <div>
        <div style={{width:'500px', border:'4px solid black', height:'500px', backgroundColor:`rgb(${red},${green},${blue})` }}></div>
        <button onClick={setColor1}>Red</button>
        <button onClick={setColor2}>Green</button>
        <button onClick={setColor3}>Blue</button>
      
    </div>
  )
}

export default ColorChange
