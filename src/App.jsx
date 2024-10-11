import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroPage from './components/HeroPage'
import Navbar from './components/Navbar'
import Connections from './components/Connections'

function App() {

  return (
    <>
      <Navbar />
      <HeroPage />
      <Connections />
    </>
  )
}

export default App
