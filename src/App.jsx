import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Carrusel from './carrusel.jsx'

import Navbar from'./navbar'

import Pie from './pie.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
  <div className='contenedor-todo'>

      <div className="navbar">
      <Navbar/> 
      </div>

      <div className="carrusel">
        <Carrusel  /> 
      </div>

      <div className='footer'>
      <Pie />
      </div>
  </div>

    </>
  )
}

export default App
