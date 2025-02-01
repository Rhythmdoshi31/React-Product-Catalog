import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Routing from './utils/Routing'

function App() {
  return (
    <div className="h-screen w-screen bg-[#0d1321] flex">
      <Routing />
    </div>
  )
}

export default App
