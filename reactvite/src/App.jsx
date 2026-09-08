import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {

  return (
    <>
      <div style={{border:'2px solid black', width:'400px', height:'500px'}}>
      <ICard/>
      </div>
    </>
  )
}

export default App
