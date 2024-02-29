import './App.css'
import { Sidenav } from './components/Sidenav'
import { MainPage } from './components/MainPage'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {


  return (
    <>
     <Sidenav />
     <MainPage />
     <Education />
     <Projects />
     <Contact />
    </>
  )
}

export default App
