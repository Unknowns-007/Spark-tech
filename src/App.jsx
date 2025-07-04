import React from "react"
import { Navbar } from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Faq from "./components/Faq"

function App() {
   return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
       <Faq/>
    </div>
  )
}

export default App
