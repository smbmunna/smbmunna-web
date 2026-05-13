import './App.css'
import Intro from './components/Intro'
import { Nav } from './components/Nav'
import RightSidebar from './components/RightSidebar'
import Sidebar from './components/Sidebar'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <div className='flex gap-8 h-screen mx-24'>
      <Sidebar/>
      {/* <Intro/> */}
      <Portfolio/>
      <RightSidebar/>
    </div>
  )
}

export default App
