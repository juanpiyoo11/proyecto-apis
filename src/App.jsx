import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Carrusel from './carrusel.jsx'
import PaginaProducto from './paginaProducto.jsx'
import Navbar from'./navbar'


import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ChakraProvider> 

    <div className='contenedor-todo'>

      <div className='navbar'>
        <Navbar/>
      </div>
      
      <div className='paginaProducto'>
        <PaginaProducto/>
      </div>
    </div>

  </ChakraProvider>     

    </>
  )
}

export default App
