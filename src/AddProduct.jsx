import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/addProduct.css";
import { createProduct, getProducts } from "./js/productServices.js";
import { useSelector } from 'react-redux';

const AddProduct = () => {
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handlePublicar = (e) => {
    e.preventDefault();
    const count = products.length + 1;
    const selectedFile = e.target.elements.image.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;

        const newProduct = {
          brand: document.getElementsByName("brand")[0].value,
          category: document.getElementsByName("category")[0].value,
          name: document.getElementsByName("name")[0].value,
          price: document.getElementsByName("price")[0].value,
          size: document.getElementsByName("size")[0].value,
          color: document.getElementsByName("color")[0].value,
          sex: document.getElementsByName("sex")[0].value,
          stock: document.getElementsByName("stock")[0].value,
          image: imageUrl,
        };

        createProduct(
          token,
          newProduct.brand,
          newProduct.category,
          newProduct.name,
          newProduct.price,
          newProduct.size,
          newProduct.color,
          newProduct.sex,
          newProduct.stock,
          newProduct.image
        )
        .then(() => alert("Publicado con éxito"))
        .catch(error => alert(error.message));
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="contenedor_todo">
      {
        <form onSubmit={handlePublicar}>
          <h1 className="titulo">Agregar un producto</h1>
          <div className="sector">
            <label>Nombre: </label>
            <br />
            <input className="agrega" type="text" name="name" placeholder="Ej: Air Force 1" required />
          </div>
          <br />
          <div className="sector">
            <label className="subtitulo">Marca: </label>
            <br />
            <input className="agrega" type="text" name="brand" placeholder="Ej: Nike" required />
          </div>
          <br />
          <div className="sector">
            <label>Categoria: </label>
            <br />
            <input className="agrega" type="text" name="category" placeholder="Ej: Running, Casual, Street" required />
          </div>
          <br />
          <div className="sector">
            <label>Precio: </label>
            <br />
            <input className="agrega" type="number" name="price" placeholder="Ej: 119999" required />
          </div>
          <br />
          <div className="sector">
            <label>Talle: </label>
            <br />
            <input className="agrega" type="number" name="size" placeholder="Ej: 7.5" required />
          </div>
          <br />
          <div className="sector">
            <label>Color: </label>
            <br />
            <input type="text" className="agrega" name="color" placeholder="Ingrese el color" required />
          </div>
          <br />
          <div className="sector">
            <label>Sexo: </label>
            <br />
            <input type="text" className="agrega" name="sex" placeholder="M, F, Unisex" required />
          </div>
          <br />
          <div className="sector">
            <label>Stock: </label>
            <br />
            <input type="number" className="agrega" min="1" name="stock" placeholder="Ingrese unidades disponibles" required />
          </div>
          <br />
          <div className="sector">
            <label>Imagen: </label>
            <br />
            <input type="file" accept="image/*" name="image" required />
          </div>
          <div className="botones">
            <button className="boton" type="submit">
              {" "}
              Publicar{" "}
            </button>
            <button className="boton" onClick={() => navigate("../home")}>
              Back to Home
            </button>
            <button className="boton" onClick={() => navigate("../products")}>
              My products{" "}
            </button>
          </div>
        </form>
      }
    </div>
  );
};

export default AddProduct;
