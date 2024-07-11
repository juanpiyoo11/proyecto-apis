/*
import React, { useState, useEffect } from "react";
import "./css/tarjeta_producto.css";
import { getProducts } from "./js/productServices.js";
import { useNavigate } from "react-router-dom";
import Carrito from "./component/carrito.jsx";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const primerosSeis = products.slice(0, 8);
  return (
    <div className="productos-container">
      {primerosSeis.map((producto) => (
        <div key={producto.id} className="tarjeta_producto">
          <img src={producto.image} alt={producto.name} className="imagen_producto" onClick={() => navigate(`../product/${producto.id}`)} />
          <h2 className="nombre_producto">{producto.name}</h2>
          <p className="precio_producto">${producto.price}</p>
          <Carrito product={producto} />
        </div>
      ))}
    </div>
  );
};

export default Productos;
*/
import React, { useEffect } from "react";
import "./css/tarjeta_producto.css";
import { getProducts } from "./js/productServices.js";
import { useNavigate } from "react-router-dom";
import Carrito from "./component/carrito.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsSuccess } from "./redux/reducers/productSlice.js";

const Productos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    getProducts().then((data) => {
      dispatch(loadProductsSuccess(data));
    });
  }, [dispatch]);

  const primerosSeis = products.slice(0, 8);
  return (
    <div className="productos-container">
      {primerosSeis.map((producto) => (
        <div key={producto.id} className="tarjeta_producto">
          <img src={producto.image} alt={producto.name} className="imagen_producto" onClick={() => navigate(`../product/${producto.id}`)} />
          <h2 className="nombre_producto">{producto.name}</h2>
          <p className="precio_producto">${producto.price}</p>
          <Carrito product={producto} />
        </div>
      ))}
    </div>
  );
};

export default Productos;
