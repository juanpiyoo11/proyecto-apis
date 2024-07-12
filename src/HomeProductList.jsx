import React, { useState, useEffect } from "react";
import "./css/tarjeta_producto.css";
import { getProducts } from "./js/productServices.js";
import { useNavigate } from "react-router-dom";
import Carrito from "./component/carrito.jsx";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const defaultImage = 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=';
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.content); 
    });
  }, []);

  

  const primerosSeis = products.slice(0, 8);
  return (
    <div className="productos-container">
      {primerosSeis.map((producto) => (
        <div key={producto.id} className="tarjeta_producto">
            <img
            src={producto.image ? producto.image : defaultImage} 
            alt={producto.name} 
            className="imagen_producto"
            onClick={() => navigate(`../product/${producto.id}`)}
           />
          <h2 className="nombre_producto">{producto.name}</h2>
          <p className="precio_producto">${producto.price}</p>
          <Carrito product={producto} />
        </div>
      ))}
    </div>
  );
};

export default Productos;
