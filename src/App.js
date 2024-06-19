import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Composants de Base/Header/Header';
import Footer from '../src/components/Composants de Base/Footer/Footer';
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About';
import Projects from '../src/pages/Projects/Projects';
import Contact from '../src/pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
