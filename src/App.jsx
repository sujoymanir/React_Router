import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Blue from './Blue'
import Red from './Red'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>




      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element ={<Home />}/>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red/>}/>
        </Routes>
        </div>
    </div>
        
    </>
  )
}

export default App
