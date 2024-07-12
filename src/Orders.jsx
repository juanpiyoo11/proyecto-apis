import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { getOrders } from "./js/productServices.js"; // Asegúrate de importar la función correcta para obtener órdenes

const OrdersComponent = () => {
  const token = useSelector((state) => state.auth.token);
  const [orders, setOrders] = useState([]); // Inicializa como un arreglo vacío []
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getOrders(token)
      .then((data) => {
        setOrders(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setError(error); // Captura el error para mostrarlo en la UI
        setIsLoaded(true); // Marca como cargado para mostrar el mensaje de error
      });
  }, [token]);

  return (
    <div>
      <h1>Órdenes Recientes</h1>
      {error ? (
        <p>Error al cargar órdenes: {error.message}</p>
      ) : isLoaded ? (
        orders.map((order) => (
          <div key={order.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <p>Fecha: {new Date(order.date).toLocaleString()}</p>
            <p>Valor Total: ${order.totalValue / 100}</p>
            <h3>Detalles del Producto:</h3>
            {order.details.map((detail) => (
              <div key={detail.id} style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
                <img src={detail.product.image} alt={detail.product.name} style={{ width: "100px", marginRight: "10px" }} />
                <div>
                  <p>Marca: {detail.product.brand}</p>
                  <p>Categoría: {detail.product.category}</p>
                  <p>Nombre: {detail.product.name}</p>
                  <p>Talla: {detail.product.size}</p>
                  <p>Color: {detail.product.color}</p>
                  <p>Género: {detail.product.sex}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>Cargando órdenes...</p>
      )}
    </div>
  );
};

export default OrdersComponent;
