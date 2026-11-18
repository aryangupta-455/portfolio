import { Routes,Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
import Home from '../src/components/home/Home';
import Projects from '../src/components/projects/Projects';
import Skills from '../src/components/skills/Skills';
import Hero from "../src/components/hero/Hero";
import About from "../src/components/about/About"

export default function RoutePath() {
  return (
    <div>
      <Routes>
        <Route path="/navabr" element = {<Navbar />}/>
        <Route path="/" element = {<Home />}/>
        <Route path="/hero" element = {<Hero/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/skills" element = {<Skills />}/>
        <Route path="/projects" element = {<Projects />}/>
      </Routes>
    </div>
  )
}
