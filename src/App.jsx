import styles from'./App.module.css' 
import { Navbar } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { About } from './components/about/about'
import { Experience } from './components/experience/experience'
import { Projects } from "./components/projects/projects";
import { Contact } from './components/contact/contact'
import { Products } from './components/products/products'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />   
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
