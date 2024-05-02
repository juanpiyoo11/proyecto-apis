import React from "react";
import data_productos from "./js/productos";
import "./css/tarjeta_producto.css";

const Productos = () => {
  return (
    <div className="productos-container">
      {data_productos.map((producto) => (
        <div key={producto.id} className="tarjeta_producto">
          <img src={producto.imagen} alt={producto.nombre} className="imagen_producto" />
          <h2 className="nombre_producto">{producto.nombre}</h2>
          <p className="precio_producto">${producto.precio}</p>
          <button className="btn_comprar" onClick={() => agregarProducto(producto)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
