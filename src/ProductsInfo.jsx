import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsBySeller, deleteProduct } from "./js/productServices.js";
import "./css/producto.css";
import { useSelector } from 'react-redux';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const token = useSelector(state => state.auth.token); // Get authentication token from Redux

  // Filter products based on search query
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter products based on category
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProductsByCategory = filteredProducts.filter(
    (product) => product.category === selectedCategory || selectedCategory === "all"
  );

  useEffect(() => {
    if (token) {
      getProductsBySeller(token)
        .then((data) => setProducts(data))
        .catch(error => console.error('Error al obtener productos:', error));
    }
  }, [token]); // Run useEffect when token changes

  const deleteProductHandler = (id) => {
    try {
      deleteProduct(id);
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      alert(`Producto ${id} eliminado con éxito`);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div className="contenedor-todo">
      <div>
      
      </div>
      <div className="productos">
      
        {filteredProductsByCategory.map((product) => (
          <div className="producto" key={product.id}>
            <img src={product.image} alt="Imagen del producto" style={{ maxWidth: "200px", maxHeight: "200px" }} />
            <div className="producto-info">
              <h2>{product.name}</h2>
              <p>Marca: {product.brand}</p>
              <p>Categoría: {product.category}</p>
              <p>Precio: ${product.price}</p>
              <p>Talle: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Sexo: {product.sex}</p>
              <p>Stock: {product.stock}</p>
            </div>
            <div className="buttons">
              <button onClick={() => deleteProductHandler(product.id)}>Eliminar</button>
              <button onClick={() => navigate(`../modifyProducts/${product.id}`)}>Modificar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

