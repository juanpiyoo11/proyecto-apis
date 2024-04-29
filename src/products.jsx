import React from 'react'
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    const newProducts = [...products]
    newProducts.splice(index, 1)
    setProducts(newProducts)
}

  return (
    <div >
          <h1>Mis Productos</h1>
          {products.map((product) => (
          <ul key={product.id}>
            <li>Id: {product.id}</li>
            <li>Publicador: {product.publisherId}</li>
            <li>Marca: {product.brand}</li>
            <li>Nombre: {product.name}</li>
            <li>Categoria: {product.category}</li>
            <li>Precio: ${product.price}</li>
            <li>Talle: {product.size}</li>
            <li>Color: {product.color}</li>
            <li>Sexo: {product.sex}</li>
            <li>Stock: {product.stock}</li>
            <li>
            <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            <button onClick={() => navigate(`../modifyProducts/${product.id}`)}>Modificar</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default products;
