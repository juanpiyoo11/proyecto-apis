import React from 'react'
import { useState, useEffect} from "react";
import {useNavigate, useParams } from 'react-router-dom';
import AddProduct from './AddProduct.jsx'

const ModifyProduct = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [products, setProducts] = useState([]);

    const updateProduct = (e) => {
        e.preventDefault();
            products.brand = document.getElementsByName("brand")[0].value;
            products.category= document.getElementsByName("name")[0].value;
            products.name= document.getElementsByName("category")[0].value;
            products.price= document.getElementsByName("price")[0].value;
            products.size= document.getElementsByName("size")[0].value;
            products.color= document.getElementsByName("color")[0].value;
            products.sex= document.querySelector('input[name="sex"]:checked').value;
            products.stock= document.getElementsByName("stock")[0].value;
        console.log(products)
        alert("Modificado con exito");
        navigate('../products')
    };

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        }, [])
    

    return (
    <div>
        <form onSubmit={updateProduct}>
        <h1>Modificar un producto</h1>
        <label>Id: </label>{products.id}
            <label>Publicador: </label>{products.publisherId}
            <label>Marca: </label><input type="text" name="brand" defaultValue={products.brand} placeholder={products.brand} required/>
            <label>Nombre: </label><input type="text" name="name" defaultValue={products.name} placeholder={products.name} required/>
            <label>Categoría: </label><input type="text" name="category" defaultValue={products.category} placeholder={products.category} required/>
            <label>Precio: $</label><input type="number" name="price" defaultValue={products.price} placeholder={products.price} required/>
            <label>Talle: </label><select name="size" required defaultValue={products.size}>
                <option value=""></option>
                {[...Array(15).keys()].map((index) => (
                <option key={index} value={7 + index * 0.5}>
                {7 + index * 0.5}
                </option>
                ))}
                </select>
            <label> Color: </label><input type="text" name="color" defaultValue={products.color} placeholder={products.color} required/>
            <label>
            <input type="radio" name="sex" value="F" required/> F
            </label>

            <label>
            <input type="radio" name="sex" value="M" required/> M
            </label>

            <label>
            <input type="radio" name="sex" value="Unisex" required /> Unisex
            </label>

            <label>Stock: </label><input type="number" min="1" name="stock" defaultValue={products.stock} placeholder={products.stock} required/>

            
            <button type = "submit">Modificar</button>
        </form>
        <button onClick={() => navigate('../home')}>Back to Home</button>
    </div>
)
}

export default ModifyProduct
