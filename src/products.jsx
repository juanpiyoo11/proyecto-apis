import React from 'react'
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import {getProducts, deleteProduct} from "./js/productServices.js"


const products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  })
  // useEffect(() => {
  //     fetch("http://localhost:3000/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  // }, [])

  const deleteProducts = (id) => {
    deleteProduct(id);
    alert(`Producto ${id} eliminado con exito`)
}

  return (
    <div>
          <h1>Mis Productos</h1>
          {products.map((product) => (
          <ul key={product.id}>
            <li><img src={product.image} alt="Imagen del producto"style={{ maxWidth: '200px', maxHeight: '200px' }}/></li>
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
            <button onClick={() => deleteProducts(product.id)}>Eliminar</button>
            <button onClick={() => navigate(`../modifyProducts/${product.id}`)}>Modificar</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default products;
