import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Main/Hero'
import SectionOne from './Components/Main/SectionOne'
import SectionTwo from './Components/Main/SectionTwo'
import SectionThree from './Components/Main/SectionThree'
import SectionFour from './Components/Main/SectionFour'
import SectionFive from './Components/Main/SectionFive'
import SectionSix from './Components/Main/SectionSix'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  )
}

export default App
