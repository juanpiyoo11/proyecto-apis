import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Carrusel from './carrusel.jsx'
import Products from './products.jsx'
import AbmProducts from './abmProducts.jsx'

import Navbar from'./navbar'
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
      <di className="abm">
      <AbmProducts/>

      </di>
    </div>

    </>
  )
}

export default App
