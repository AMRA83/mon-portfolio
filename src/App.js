import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Composants de Base/Header/Header';
import Footer from './components/Composants de Base/Footer/Footer';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';


function App() {

  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
