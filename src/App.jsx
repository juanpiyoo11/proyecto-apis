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
      <div className='abm'>
        <Routes>
          <Route path ='/'/>
          <Route  path ='/home' element={<Carrusel/>} />
          <Route  path ='/products' element={<ProductPage/>} />
          <Route path ='/addproducts' element={<AddProduct/>} />
          <Route path ='/modifyproducts/:id' element={<ModifyProduct/>} />
        </Routes>
    </div>
    </div>
     

    </>
  )
}

export default App
