import React from 'react'

function products({deleteProduct, index, brand, name, price, size, color}) {
  return (
    <div>
        <ul>
            <li>Marca: {brand}</li>
            <li>Nombre: {name}</li>
            <li>Precio: ${price}</li>
            <li>Talle: {size}</li>
            <li>Color: {color}</li>
            <li><button onClick={() => deleteProduct(index)}>Eliminar Producto</button></li>
        </ul>
    </div>
  );
}

export default products;
