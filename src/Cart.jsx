import React, { useEffect, useState, useRef } from "react";
import "./css/carrito.css";
import { obtenerItemsCarrito, quitarItemCarrito } from "./js/carritoService.js";
import Checkout from "./component/checkout.jsx";

const defaultImage = 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=';

function Carrito({ cerrarCarrito }) {
  const [productos, setProductos] = useState([]);
  const carritoRef = useRef();

  useEffect(() => {
    const itemsCarrito = obtenerItemsCarrito();
    setProductos(itemsCarrito);

    function handleClickFuera(event) {
      if (carritoRef.current && !carritoRef.current.contains(event.target)) {
        cerrarCarrito();
      }
    }

    document.addEventListener("mousedown", handleClickFuera);
    return () => {
      document.removeEventListener("mousedown", handleClickFuera);
    };
  }, [cerrarCarrito]);

  const eliminarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
  };

  const handleBoton = (index, id) => {
    eliminarProducto(index);
    quitarItemCarrito(id);
  };

  return (
    <div ref={carritoRef} className="submenu-carrito">
      <div className="cerrar" onClick={cerrarCarrito}>
        ✕
      </div>
      <h2 className="subtitulo">Productos</h2>
      {/* Mostrar productos agregados al carrito */}
      {productos.length > 0 ? (
        <div className="productos">
          {productos.map((producto, index) => (
            <div key={index} className="producto">
              <div className="botons">
                <button onClick={() => handleBoton(index, producto.id)}>✕</button>
              </div>
              <div className="informacion">
                <div className="imagen">
                  <img 
                    className="zapa" 
                    src={producto.image && producto.image[0] ? producto.image[0].url : defaultImage} 
                    alt={producto.name ? producto.name : 'Producto sin nombre'} 
                  />
                </div>
                <div className="info">
                  <div>{producto.name || 'Producto sin nombre'}</div>
                  <div>${producto.price || '0.00'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      <Checkout products={productos} />
    </div>
  );
}

export default Carrito;
