import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, modifyProduct } from "./js/productServices.js";
import "./css/addProduct.css";

const ModifyProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState({
    id: "",
    publisherId: "",
    brand: "",
    category: "",
    name: "",
    price: "",
    size: "",
    color: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: id,
      brand: e.target.brand.value,
      category: e.target.category.value,
      name: e.target.name.value,
      price: parseFloat(e.target.price.value), // Convertir a número
      size: parseFloat(e.target.size.value), // Convertir a número
      color: e.target.color.value,
      stock: parseInt(e.target.stock.value, 10), // Convertir a número entero
      image: product.image,
    };

    const selectedFile = e.target.image.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        updatedProduct.image = imageUrl;
        modifyProduct(updatedProduct, id);
        alert("Modificado con éxito");
        navigate("../products");
      };
      reader.readAsDataURL(selectedFile);
    } else {
      try {
        await modifyProduct(updatedProduct, id);
        alert("Modificado con éxito");
        navigate("../products");
      } catch (error) {
        console.error("Error al modificar el producto:", error);
      }
    }
  };

  return isLoaded ? (
    <div className="contenedor_todo">
      <form onSubmit={updateProduct}>
        <h1 className="titulo">Modificar un producto</h1>

        <div className="sector">
          <label>Marca:</label>
          <br />
          <input
            type="text"
            name="brand"
            defaultValue={product.brand}
            placeholder={product.brand}
            required
          />
        </div>

        <br />
        <div className="sector">
          <label>Nombre:</label>
          <br />
          <input
            type="text"
            name="name"
            defaultValue={product.name}
            placeholder={product.name}
            required
          />
        </div>

        <br />
        <div className="sector">
          <label>Categoría:</label>
          <br />
          <input
            type="text"
            name="category"
            defaultValue={product.category}
            placeholder={product.category}
            required
          />
        </div>

        <br />
        <div className="sector">
          <label>Precio: $</label>
          <br />
          <input
            type="number"
            name="price"
            defaultValue={product.price}
            placeholder={product.price}
            required
          />
        </div>

        <br />
        <div className="sector">
          <label>Talle:</label>
          <br />
          <input
            type="number"
            name="size"
            defaultValue={product.size}
            placeholder={product.size}
            required
          />
        </div>

        <br />
        <div className="sector">
          <label>Color:</label>
          <br />
          <input
            type="text"
            name="color"
            defaultValue={product.color}
            placeholder={product.color}
            required
          />
        </div>

        <br />
        <div className="sector">
          <label>Stock:</label>
          <br />
          <input
            type="number"
            name="stock"
            defaultValue={product.stock}
            placeholder={product.stock}
            required
          />
        </div>

        <br />
        <div className="sector">
          <label>Imagen:</label>
          <br />
          <input type="file" accept="image/*" name="image" />
        </div>
        
        <div className="botones">
          <button className="boton" type="submit">
            Modificar
          </button>
          <button className="boton" onClick={() => navigate("../home")}>
            Volver a Inicio
          </button>
          <button className="boton" onClick={() => navigate("../products")}>
            Mis productos
          </button>
        </div>
      </form>
    </div>
  ) : null;
};

export default ModifyProduct;
