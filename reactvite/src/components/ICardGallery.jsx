import React from 'react'
import ICard from './ICard'
import image from '../assets/Logo.webp'

function ICardGallery() {
    const student=[{
        pic:image,
        college:'ABES Engineering College',
        roll:'872',
        name:'Ram',
        branch:'CSE',
        section:'24',
        skills:'Cpp'
    },
    {
        pic:image,
        college:'ABES Engineering College',
        roll:'872',
        name:'Ravi',
        branch:'CSE',
        section:'27',
        skills:'Cpp'
    },
    {
        pic:image,
        college:'ABES Engineering College',
        roll:'872',
        name:'Shyam',
        branch:'CSE',
        section:'22',
        skills:'Cpp'
    },
    {
        pic:image,
        college:'ABES Engineering College',
        roll:'872',
        name:'Vikas',
        branch:'CSE',
        section:'24',
        skills:'Cpp'
    }]



  return (
    <div>
      {/* <ICard pic={image} college="ABES Engineering College" roll="2400320100872" name="Rahul Singh" branch="CSE" section="24" skills="C++,DSA,HTML" />
      <ICard pic={image} college="ABES Engineering College" roll="2400320100873" name="Raj" branch="CSE-DS" section="A" skills="C++,DSA,HTML" />
      <ICard pic={image} college="ABES Engineering College" roll="2400320117893" name="Amit" branch="ECE" section="B" skills="C++,DSA,HTML"/> */}
      {/* <ICard data={student[1]}/> */}

      {
        student.map((ele) => (
            <ICard data={ele}/>
        ))
      }
    </div>
  )
}

export default ICardGallery
