import React from 'react'
import { useState } from 'react'

function UpdateName() {
  const [name, setName] = useState('john');
  const [college, setCollege] = useState('xyz college');

  function changeName(){
    setName('Rahul');
  }
  function changeCollege(){
    setCollege('ABES Engineering College, Ghaziabad');
  }

  return (
    <div>
        <h1>College Name : {college}</h1>
        <h1>Name : {name}</h1>
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeCollege}>Change College</button>
      
    </div>
  )
}

export default UpdateName
