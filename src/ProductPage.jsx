import React from 'react'
import {useNavigate} from 'react-router-dom'
import Products from './products.jsx'

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Products/>
      <button onClick ={() => navigate('../addproducts')}>Agregar un nuevo producto</button>
      <br />
      <button onClick={() => navigate('../')}>Back to Home</button>
    </>

  )
}

export default ProductPage