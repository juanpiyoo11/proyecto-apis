
import { useState } from 'react'
import './css/App.css'
import Carrusel from './carrusel.jsx'
import Navbar from'./navbar'
import Pie from './pie.jsx'
import PaginaProducto from './paginaProducto.jsx'
import Productos from "./productos.jsx";

import ProductPage from './ProductPage.jsx'
import AddProduct from './AddProduct.jsx'
import ModifyProduct from './ModifyProduct.jsx'
import {Routes, Route} from 'react-router-dom'


import Navbar from'./navbar'


import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0);

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
      <div className='abm'>
        <Routes>
          <Route path ='/'/>
          <Route  path ='/home' element={<Carrusel/>} />
          <Route  path ='/products' element={<ProductPage/>} />
          <Route path ='/addproducts' element={<AddProduct/>} />
          <Route path ='/modifyproducts/:id' element={<ModifyProduct/>} />
        </Routes>
    </div>
            <div>
            <Productos />
            </div>
      <div className='footer'>
        <Pie />
      </div>
    </div>

  </ChakraProvider>     


      </div>
    </div>
    </>
  );
}

export default App;
