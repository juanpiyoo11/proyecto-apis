
import React, { useState, useEffect } from "react";
import "./css/tarjeta_producto.css";
import { getProducts } from "./js/productServices.js";

const Productos = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  const primerosSeis = products.slice(0, 6);
  return (
    <div className="productos-container">
      {primerosSeis.map((producto) => (
        <div key={producto.id} className="tarjeta_producto">
          <img src={producto.image} alt={producto.name} className="imagen_producto" />
          <h2 className="nombre_producto">{producto.name}</h2>
          <p className="precio_producto">${producto.price}</p>
          <button className="btn_comprar">Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
