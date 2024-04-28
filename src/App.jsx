
import { useState } from 'react'
import './css/App.css'
import Carrusel from './carrusel.jsx'
import Checkout from './component/checkout.jsx'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from'./navbar'


import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0);

  return (

    <>
    <ChakraProvider>
      <div className='contenedor-todo'>
          <Checkout products={null} />
          <div className="navbar">
          <Navbar/> 
          </div>
          <div className="carrusel">
            <Carrusel  /> 
          </div>
      </div>
    </ChakraProvider>
    </>
  );
}

export default App;
