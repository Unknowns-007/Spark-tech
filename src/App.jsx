import React from "react"
import { Navbar } from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Faq from "./components/Faq"
import ContactForm from "./components/ContactForm"

function App() {
   return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <ContactForm/>
       <Faq/>
    </div>
  )
}

export default App
