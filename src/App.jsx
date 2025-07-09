import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Blogs from './components/Blogs';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const Home = () => (
  <>
    <div id="home">
      <Hero />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="footer">
      <Footer />
    </div>
    <div id="contact">
      <ContactForm />
    </div>
  </>
);

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<ProjectsSection />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </div>
  );
};

export default App;
