import React from "react"
import { Navbar } from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import FAQ from "./components/FAQ"

function App() {
   return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
       <FAQ/>
    </div>
  )
}

export default App
