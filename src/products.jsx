import React from 'react'

function products({deleteProduct, updateProduct, index, id, brand, name, category, price, size, color}) {
  return (
    <div>
        <ul>
            <li>Id: {id}</li>
            <li>Marca: {brand}</li>
            <li>Nombre: {name}</li>
            <li>Categoria: {category}</li>
            <li>Precio: ${price}</li>
            <li>Talle: {size}</li>
            <li>Color: {color}</li>
            <li><button onClick={() => deleteProduct(index)}>Eliminar</button> <button onClick={() => updateProduct(id)}>Modificar</button></li>
        </ul>
    </div>
  );
}

export default products;
