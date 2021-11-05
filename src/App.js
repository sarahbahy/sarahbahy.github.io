import lines from './map.svg';
import { Routes, Route } from "react-router-dom";
// import { useState } from 'react';
import Header from './components/header'
import Logo from './components/logo'
import Home from './components/home'
import Projects from './components/projects'
import './scss/App.scss';

function App() {
  // const [isShown, setIsShown] = useState(false);
  return (
    
      <main className="app">
       <Logo/>
      <section className="main">
      {/* <img src={lines} className="app__bg" alt="background" /> */}
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
        </section>
      </main>
  );
}

export default App;
