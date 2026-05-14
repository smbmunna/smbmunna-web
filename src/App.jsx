import './App.css'
import Intro from './pages/Intro'
import RightSidebar from './components/RightSidebar'
import Sidebar from './components/Sidebar'
import Portfolio from './pages/Portfolio'
import { useState } from 'react'

const PAGES= ['intro', 'portfolio']; 

function App() {
  const [activePage, setActivePage] = useState('intro');
  

  return (
    <div className='flex gap-8 h-screen px-24 bg-[#232324] text-white border overflow-hidden'>

      <Sidebar />
      <div key={activePage} className="flex-1 animate-fadeIn">
        {activePage === 'intro' && <Intro />}
        {activePage === 'portfolio' && <Portfolio />}
      </div>
      <RightSidebar pages={PAGES} setActivePage={setActivePage} activePage={activePage} />
    </div>
  )
}

export default App
