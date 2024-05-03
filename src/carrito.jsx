import React, {useEffect, useState} from 'react';
import './css/carrito.css';
import {obtenerItemsCarrito} from "./js/carritoService.js";
import Checkout from "./component/checkout.jsx";

function Carrito({ cerrarCarrito }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const itemsCarrito = obtenerItemsCarrito();
        setProductos(itemsCarrito);
    }, []);

    return (
        <div className='submenu-carrito'>
            <div className='cerrar' onClick={cerrarCarrito}>✕</div>
            <h2 className='subtitulo'>Productos</h2>
            {/* Mostrar productos agregados al carrito */}
            {productos.length > 0 ? (
                <div className='productos'>
                    {productos.map((producto, index) => (
                        <div key={index} className='producto'>
                            <img src={producto.image} alt={producto.name} />
                            <div>{producto.name}</div>
                            <div>${producto.price}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
            <Checkout products={productos}/>
        </div>
    );
}

export default Carrito;