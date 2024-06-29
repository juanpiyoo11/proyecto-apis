export const obtenerItemsCarrito = () => {
  const carrito = localStorage.getItem("carrito");
  if (carrito) {
    return JSON.parse(carrito);
  } else {
    return [];
  }
};

export const agregarItemCarrito = (item) => {
  const carrito = obtenerItemsCarrito();
  carrito.push(item);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

export const quitarItemCarrito = (idProducto) => {
  const carrito = obtenerItemsCarrito();
  const carritoActualizado = carrito.filter((producto) => producto.id !== idProducto);
  localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
};
export const limpiarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify([]));
};
