import './App.css'
import Intro from './components/Intro'
import { Nav } from './components/Nav'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex gap-8'>
      <Sidebar/>
      <Intro/>
    </div>
  )
}

export default App
