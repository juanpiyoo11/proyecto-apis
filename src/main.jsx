import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store.js';
import { limpiarCarrito } from './js/carritoService.js';

// Limpia el carrito al cargar la aplicación
limpiarCarrito();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
