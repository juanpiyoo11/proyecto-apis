import { useState } from 'react'
import './css/App.css'
import Carrusel from './carrusel.jsx'
import ProductPage from './ProductPage.jsx'
import AddProduct from './AddProduct.jsx'
import ModifyProduct from './ModifyProduct.jsx'
import {Routes, Route} from 'react-router-dom'


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
      </div>
      <div>
        <Routes>
          <Route path ='/'/>
          <Route path ='/products' element={<ProductPage/>} />
          <Route path ='/addproducts' element={<AddProduct/>} />
          <Route path ='/modifyproducts/:id' element={<ModifyProduct/>} />
        </Routes>
    </div>

    </>
  )
}

export default App
