import React, { useState } from 'react'
import image from '../assets/catimage.png'

function ImageManipulation() {
    const [catHeight, setCatHeight] = useState(100);
    const [catWidth, setCatWidth] = useState(100);
    const[red, setRed] = useState(0);
    const[green, setGreen] = useState(0);
    const[blue, setBlue] = useState(0);

    function increaseHeight(){
        setCatHeight(catHeight+10);
    }
    function increaseWidth(){
        setCatWidth(catWidth+10);
    }
    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Image Manipulation</h2>
      <div style={{height:'fit-content', width:'fit-content', border:'2px solid red', marginLeft:'40%', marginTop:'10%', backgroundColor:`rgb(${red},${green},${blue})`}}>
        <img src={image} alt="" height={catHeight} width={catWidth}/>
      </div>
      <div style={{marginLeft:'40%', marginTop:'10%'}}>
        <button onClick={increaseHeight}>increase Height</button>
        <button onClick={increaseWidth}>increase Width</button>
        <button onClick={changeBGColor}>Change BGColor</button>

      </div>
    </div>
  )
}

export default ImageManipulation
