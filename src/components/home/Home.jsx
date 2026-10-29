import Navbar from "../navbar/Navbar"
import Skills from "../skills/Skills"
import Projects from '../projects/Projects'
import Hero from "../hero/Hero"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <Skills/>
      <Projects/>
    </div>
  )
}
