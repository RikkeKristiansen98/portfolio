import './App.css'
import { Sidenav } from './components/Sidenav'
import { MainPage } from './components/MainPage'
import { Education } from './components/Education'
import { Projects } from './components/Projects'

function App() {


  return (
    <>
     <Sidenav />
     <MainPage />
     <Education />
     <Projects />
    </>
  )
}

export default App
