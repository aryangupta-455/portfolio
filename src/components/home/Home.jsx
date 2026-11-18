import Navbar from "../navbar/Navbar"
import Skills from "../skills/Skills"
import Projects from '../projects/Projects'
import Hero from "../hero/Hero"
import About from "../about/About"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  )
}
