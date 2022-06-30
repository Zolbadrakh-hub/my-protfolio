
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
