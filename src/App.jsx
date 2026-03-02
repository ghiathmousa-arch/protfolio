import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Compontes/NavBar'
import './index.css'
import useTheme from './Compontes/useTheme';
import Hero from './Compontes/Hero';
import Dot from './Compontes/Dot';
import About from './Compontes/About';
import Timeline from './Compontes/Timeline ';
import Cta from './Compontes/Cta';
import Cards from './Compontes/Cards';
import Contact from './Compontes/Contact';
import Footer from './Compontes/Footer';
import ProjectDetails from './Compontes/ProjectDetails';

function App() {
  const [theme, setTheme] = useState("light");
  useTheme(theme, setTheme)

  return (
    <div className={theme === "dark" ? "dark bg-gray-900" : "bg-white"}>
      <NavBar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={
          <>
            <Hero theme={theme} setTheme={setTheme} />
            <Dot theme={theme} />
            <About theme={theme} />
            <Timeline />
            <Cta />
            <Cards theme={theme} />
            <Contact theme={theme} />
            <Footer theme={theme} />
          </>
        } />

        <Route path="/projects/:id" element={<ProjectDetails theme={theme} />} />
      </Routes>
    </div>
  )
}


export default App