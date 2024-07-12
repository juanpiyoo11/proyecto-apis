import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, modifyProduct, uploadImg } from "./js/productServices.js";
import "./css/addProduct.css";
import { useSelector } from 'react-redux';

const ModifyProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState({
    brand: "",
    category: "",
    name: "",
    price: "",
    size: "",
    color: "",
    sex: "",
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
        price: parseFloat(e.target.price.value),
        size: parseFloat(e.target.size.value),
        color: e.target.color.value,
        sex: e.target.sex.value,
        stock: parseInt(e.target.stock.value, 10),
        image: product.image, // Asegúrate de que product.image contenga la URL de la imagen actual si existe
    };

    const selectedFile = e.target.elements.image.files[0];
    if (selectedFile) {
        try {
            const imageUrl = await uploadImg(selectedFile); // Espera a que se cargue la imagen y devuelve la URL
            updatedProduct.image = imageUrl; // Asigna la URL de la imagen actualizada a updatedProduct

            await modifyProduct(updatedProduct, id, token);
            alert('Modificado con éxito');
            navigate('../products');
        } catch (error) {
            console.error('Error al modificar el producto:', error);
        }
    } else {
        try {
            await modifyProduct(updatedProduct, id, token);
            alert('Modificado con éxito');
            navigate('../products');
        } catch (error) {
            console.error('Error al modificar el producto:', error);
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
            step="0.5"
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

        <div className="sector">
          <label>Sex:</label>
          <br />
          <input
            type="text"
            name="sex"
            defaultValue={product.sex}
            placeholder={product.sex}
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
