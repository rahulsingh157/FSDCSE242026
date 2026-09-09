import React from 'react'


function ICard({data}) {
  return (
    <div style={{border:'2px solid black'}}>
      {/* <h2 style={{color:'blue', textAlign:'center'}}>ABES Engineering college</h2>
      <p style={{color:'red', textAlign:'center'}}>Roll No: 2400320100872</p>
      <p style={{color:'red', textAlign:'center'}}>Name: Rahul Singh</p>
      <p style={{color:'red', textAlign:'center'}}>Branch: CSE</p>
      <p style={{color:'red', textAlign:'center'}}>Section: 24</p>
      <p style={{color:'red', textAlign:'center'}}>Skills: JavaScript, React, Node.js</p> */}
      
      <img src={data.pic} height={200} width={200} style={{backgroundColor:'black', marginLeft:'45%'}}></img>
      <h2 style={{color:'blue', textAlign:'center'}}>College:{data.college}</h2>
      <h2 style={{color:'red', textAlign:'center'}}>Roll:{data.roll}</h2>
      <h2 style={{color:'red', textAlign:'center'}}>Name:{data.name}</h2>
      <h2 style={{color:'red', textAlign:'center'}}>Branch:{data.branch}</h2>
      <h2 style={{color:'red', textAlign:'center'}}>Section:{data.section}</h2>
      <h2 style={{color:'red', textAlign:'center'}}>Skills:{data.skills}</h2>
    </div>
  )
}

export default ICard
