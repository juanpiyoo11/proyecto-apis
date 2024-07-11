/*
import React, { useEffect, useState } from "react";
import "./css/carrito.css";
import { obtenerItemsCarrito, quitarItemCarrito } from "./js/carritoService.js";
import Checkout from "./component/checkout.jsx";
import { useRef } from "react";

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
      {productos.length > 0 ? (
        <div className="productos">
          {productos.map((producto, index) => (
            <div key={index} className="producto">
              <div className="botons">
                <button onClick={() => handleBoton(index, producto.id)}>✕</button>
              </div>
              <div className="informacion">
                <div className="imagen">
                  <img className="zapa" src={producto.image} alt={producto.name} />
                </div>
                <div className="info">
                  <div>{producto.name}</div>
                  <div>${producto.price}</div>
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

*/

import React, { useEffect, useRef } from "react";
import "./css/carrito.css";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./component/checkout.jsx";
import { removeItem, clearCart } from "./redux/reducers/CarritoSlice.js"; // Asegúrate de importar las acciones correctamente

function Carrito({ cerrarCarrito }) {
  const productos = useSelector((state) => state.cart.items); // Accede al estado del carrito
  const dispatch = useDispatch();
  const carritoRef = useRef();

  useEffect(() => {
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

  const handleBoton = (id) => {
    dispatch(removeItem(id)); // Despacha la acción removeItem
  };

  // Resto del componente...

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
                <button onClick={() => handleBoton(producto.id)}>✕</button>
              </div>
              <div className="informacion">
                <div className="imagen">
                  <img className="zapa" src={producto.image} alt={producto.name} />
                </div>
                <div className="info">
                  <div>{producto.name}</div>
                  <div>${producto.price}</div>
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
