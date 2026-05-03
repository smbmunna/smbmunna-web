import './App.css'
import Intro from './components/Intro'
import { Nav } from './components/Nav'
import RightSidebar from './components/RightSidebar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex gap-8'>
      <Sidebar/>
      <Intro/>
      <RightSidebar/>
    </div>
  )
}

export default App
