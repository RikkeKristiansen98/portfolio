import './App.css'
import { Sidenav } from './components/Sidenav'
import { MainPage } from './components/MainPage'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
     <Sidenav />
     <MainPage />
     <About />
     <Education />
     <Projects />
     <Contact />
     <Footer />
    </>
  )
}

export default App
