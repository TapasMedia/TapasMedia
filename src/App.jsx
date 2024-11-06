import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroPage from './components/HeroPage'
import Navbar from './components/Navbar'
import Connections from './components/Connections'
import Footer from './components/Footer'
import WhyUs from './components/WhyUs'
import Impact from './components/Impact'
import Ignite from './components/Ignite'
import SparkOfSatisfaction from './components/SparkOfSatisfaction'
import TimelinePage from './components/Timeline'
import WhyChooseVideos from './components/WhyChooseVideos'
import PerksPage from './components/PerksPage'
import SubscribePage from './components/SubscribePage'
import ScrollPage from './components/ScrollPage'

// https://www.canva.com/design/DAGTk8PwBos/2kvuco0DJDoMkmcHU2BOzQ/edit


function App() {

  return (
    <>
      <Navbar />
      <HeroPage />
      <Connections />
      <WhyUs />
      <Impact/>
      <Ignite />
      <SparkOfSatisfaction />
      <TimelinePage />
      <WhyChooseVideos />
      <PerksPage />
      <SubscribePage />
      <ScrollPage />
      <Footer />
    </>
  )
}

export default App
