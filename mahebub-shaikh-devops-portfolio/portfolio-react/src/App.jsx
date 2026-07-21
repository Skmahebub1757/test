import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
