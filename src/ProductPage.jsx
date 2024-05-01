import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from './products.jsx';
import './css/productPage.css';

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <div className="contenedor-todo">
      <div className="productos">
        
        <Products />
      </div>
      <div className="botones">
        <button className='boton' onClick={() => navigate('../addproducts')}>Agregar un nuevo producto</button>
        <button className='boton' onClick={() => navigate('../home')}>Back to Home</button>
      </div>
    </div>
  );
}

export default ProductPage;
