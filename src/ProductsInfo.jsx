import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "./js/productServices.js";
import "./css/producto.css";

const products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  // useEffect(() => {
  //     fetch("http://localhost:3000/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  // }, [])

  const deleteProducts = (id) => {
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
            <li>Categoria: {product.category}</li>
            <li>Precio: ${product.price}</li>
            <li>Talle: {product.size}</li>
            <li>Color: {product.color}</li>
            <li>Sexo: {product.sex}</li>
            <li>Stock: {product.stock}</li>
            <li className="buttons">
              <button onClick={() => deleteProducts(product.id)}>Eliminar</button>
              <button onClick={() => navigate(`../modifyProducts/${product.id}`)}>Modificar</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default products;
