import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsBySeller, deleteProduct } from "./js/productServices.js";
import "./css/producto.css";
import { useSelector } from 'react-redux'; // Importa useSelector para obtener el token

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const token = useSelector(state => state.auth.token); // Obtén el token de autenticación desde Redux

  useEffect(() => {
    if (token) {
      getProductsBySeller(token)
        .then((data) => setProducts(data))
        .catch(error => console.error('Error al obtener productos:', error));
    }
  }, [token]); // Ejecuta useEffect cuando cambie el token

  const deleteProductHandler = (id) => {
    try {
      deleteProduct(id);
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      alert(`Producto ${id} eliminado con éxito`);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div>
      <h1 className="title">Mis Productos</h1>
      <div className="productos">
        {products.map((product) => (
          <ul className="producto" key={product.id}>
            <li>
              <img src={product.image} alt="Imagen del producto" style={{ maxWidth: "200px", maxHeight: "200px" }} />
            </li>
            <li>Marca: {product.brand}</li>
            <li>Nombre: {product.name}</li>
            <li>Categoría: {product.category}</li>
            <li>Precio: ${product.price}</li>
            <li>Talle: {product.size}</li>
            <li>Color: {product.color}</li>
            <li>Sexo: {product.sex}</li>
            <li>Stock: {product.stock}</li>
            <li className="buttons">
              <button onClick={() => deleteProductHandler(product.id)}>Eliminar</button>
              <button onClick={() => navigate(`../modifyProducts/${product.id}`)}>Modificar</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Products;
