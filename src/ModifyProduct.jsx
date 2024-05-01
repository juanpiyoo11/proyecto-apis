import React from 'react'
import { useState, useEffect} from "react";
import {useNavigate, useParams } from 'react-router-dom';
import {getProductById, modifyProduct} from "./js/productServices.js"
import './css/addProduct.css'
const ModifyProduct = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [products, setProducts] = useState([]);

    const updateProduct = async (e) => {
        e.preventDefault();
        const updatedProduct = {
            id : id,
            publisherId : products.publisherId,
            brand : document.getElementsByName("brand")[0].value,
            category: document.getElementsByName("name")[0].value,
            name: document.getElementsByName("category")[0].value,
            price: document.getElementsByName("price")[0].value,
            size: document.getElementsByName("size")[0].value,
            color: document.getElementsByName("color")[0].value,
            sex : document.querySelector('input[name="sex"]:checked').value,
            stock : document.getElementsByName("stock")[0].value,
            image : products.image
        }
        const selectedFile = e.target.elements.image.files[0]; 
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageUrl = event.target.result;
                updatedProduct.image = imageUrl; 
                modifyProduct(updatedProduct, id); 
                alert("Modificado con éxito");
                navigate('../products');
            };
            reader.readAsDataURL(selectedFile); 
        } else {
            try {
                await modifyProduct(updatedProduct, id);
                alert("Modificado con éxito");
                navigate('../products');
            } catch (error) {
                console.error('Error al modificar el producto:', error);
            }
        }
    };

    useEffect(() => {
        getProductById(id).then((data) => setProducts(data));
      }, [])
    

    return (
    <div className="contenedor_todo">
        <form onSubmit={updateProduct}>
            <h1 className='titulo'>Modificar un producto</h1>
            <div className="sector">
            <label>Id: </label> {products.id}    
            </div>
            <br />
        <div className="sector">
            <label>Publicador: </label>{products.publisherId}

        </div>
        <br />
        <div className="sector">

            <label>Marca: </label> <br /><input type="text" name="brand" defaultValue={products.brand} placeholder={products.brand} required/>
        </div>
        <br />
        <div className='sector'>

            <label>Nombre: </label><br /><input type="text" name="name" defaultValue={products.name} placeholder={products.name} required/>
        </div>
        <br />
        <div className="sector">

            <label>Categoría: </label><br /><input type="text" name="category" defaultValue={products.category} placeholder={products.category} required/>
        </div>
        <br />
        <div className="sector">
            <label>Precio: $</label><br /><input type="number" name="price" defaultValue={products.price} placeholder={products.price} required/>

        </div>
        <br />
        <div className="sector">

            <label>Talle: </label><br /><select name="size" required defaultValue={products.size}>
                <option value=""></option>
                {[...Array(15).keys()].map((index) => (
                <option key={index} value={7 + index * 0.5}>
                {7 + index * 0.5}
                </option>
                ))}
                </select>
        </div>
        <br />
        <div className="sector">

            <label> Color: </label><br /><input type="text" name="color" defaultValue={products.color} placeholder={products.color} required/>
        </div>
        <br />
        <div className="sector">
            <label > Sexo:</label>
            <br />
            <label>
            <input type="radio" name="sex" value="F" required/> F
            </label>
            <label>
            <input type="radio" name="sex" value="M" required/> M
            </label>

            <label>
            <input type="radio" name="sex" value="Unisex" required /> Unisex
            </label>

        </div>
        <br />
        <div className="sector">

                    <label>Stock: </label><br /><input type="number" min="1" name="stock" defaultValue={products.stock} placeholder={products.stock} required/>
        </div>
                
<br />
            <div className='sector'>
                    <label>Imagen: </label>
                    <br />
                    <input type="file" accept="image/*" name="image"/>
            </div>

        <div className="botones">
            <button className='boton' type = "submit">Modificar</button>

        <button className='boton' onClick={() => navigate('../home')}>Back to Home</button>
        <button className='boton' onClick={() => navigate('../products')}>My products </button>
        </div>
        </form>
    </div>
)
}

export default ModifyProduct
