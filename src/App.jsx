import './App.css'
import Intro from './pages/Intro'
import RightSidebar from './components/RightSidebar'
import Sidebar from './components/Sidebar'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <div className='flex gap-8 h-screen px-24 bg-gray-800 text-white border '>
      
        <Sidebar className='' />
        <Intro />
      {/* <Portfolio/> */}
        <RightSidebar />
      </div>
  )
}

export default App
