import React from 'react'
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import './css/addProduct.css'
import {createProduct, getProducts} from "./js/productServices.js"

const AddProduct =()=> {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((data) => setProducts(data));
      })

      const handlePublicar = (e) => {
        e.preventDefault();
        const count = products.length + 1;
        const selectedFile = e.target.elements.image.files[0]; 
    
        if (selectedFile) {
            const reader = new FileReader(); 
            reader.onload = (event) => { 
                const imageUrl = event.target.result;
    
                const newProduct = {
                    id: count.toString(),
                    publisherId: "1",
                    brand: document.getElementsByName("brand")[0].value,
                    category: document.getElementsByName("name")[0].value,
                    name: document.getElementsByName("category")[0].value,
                    price: document.getElementsByName("price")[0].value,
                    size: document.getElementsByName("size")[0].value,
                    color: document.getElementsByName("color")[0].value,
                    sex: document.querySelector('input[name="sex"]:checked').value,
                    stock: document.getElementsByName("stock")[0].value,
                    image: imageUrl
                };
    
                createProduct(newProduct.id, newProduct.publisherId, newProduct.brand, newProduct.category, newProduct.name, newProduct.price, newProduct.size, newProduct.color, newProduct.sex, newProduct.stock, newProduct.image);
                alert("Publicado con éxito");
            };
    
            reader.readAsDataURL(selectedFile);
        }
    };
    
    // const handlePublicar = (e) => {
    //     e.preventDefault();
    //     const count = products.length + 1;

    //     const selectedFile = e.target.elements.image.files[0]; // Obtener el archivo seleccionado por el usuario
    //     const newProduct = {
    //         id : count.toString(),
    //         publisherId : "1", //por ahora tenemos un publisher hardcodeado, en la segunda entrega con
    //         //configuracion de cuentas, deberiamos asignar el id del que esta publicando
    //         brand : document.getElementsByName("brand")[0].value,
    //         category: document.getElementsByName("name")[0].value,
    //         name: document.getElementsByName("category")[0].value,
    //         price: document.getElementsByName("price")[0].value,
    //         size: document.getElementsByName("size")[0].value,
    //         color: document.getElementsByName("color")[0].value,
    //         sex : document.querySelector('input[name="sex"]:checked').value,
    //         stock : document.getElementsByName("stock")[0].value
    //     }
    //     createProduct(newProduct.id, newProduct.publisherId, newProduct.brand, newProduct.category, newProduct.name, newProduct.price, newProduct.size, newProduct.color, newProduct.sex, newProduct.stock);
    //     alert("Publicado con exito");
    // };
  return (
    <div className="contenedor_todo">
            { <form onSubmit={handlePublicar}>
                
                    
                    <h1>Agregar un producto</h1>
                    <div className='sector'>
                        <label>Nombre: </label>
                        <br />
                        <input className='agrega' type="text" name="name" placeholder="Ej: Air Force 1" required/>
 
                    </div>

                    <br />
                    <div className="sector">

                        <label className='subtitulo'>Marca: </label>
                        <br />
                        <input className='agrega' type="text" name="brand" placeholder="Ej: Nike" required/>                    
                    </div>
                    <br />
                    <div className="sector">
                    <label>Categoria: </label>
                    <br />
                    <input className='agrega' type="text" name="category" placeholder="Ej: Running, Casual, Street" required/>

                    </div>
                    <br />
                    <div className="sector">
                    <label>Precio: </label>
                    <br />
                    <input className='agrega' type="number" name="price" placeholder="Ej: 119999" required/>

                    </div>
                    <br />
                    <div className="sector">
                    <label>Talle: </label>
                    <br />
                    <select name="size" required>
                    <option value="">Seleccione un talle</option>
                    {[...Array(15).keys()].map((index) => (
                    <option key={index} value={7 + index * 0.5}>
                    {7 + index * 0.5}
                    </option>
                    ))}
                    </select>

                    </div>
                    <br />
                    <div className="sector">
                        
                    <label>Color: </label>
                    <br />
                    <input type="text" className='agrega' name="color" placeholder="Seleccione todos los colores disponibles" required/>
                    </div>
                    <br />
                    <div className="sector">
                    <label>Sexo: </label>
                    <br />
                    <div className='sexos'>
                        <label><input type="radio" name="sex" value="F" required/> F</label>
                        <label><input type="radio" name="sex" value="M" required/> M</label>
                        <label><input type="radio" name="sex" value="Unisex" required/> Unisex</label>

                    </div>

                    </div>
                    
                    
                    
                    <br />
                    <div className="sector">

                    <label>Stock: </label>
                    <br />
                    <input type="number" className='agrega' min="1" name="stock" placeholder="Ingrese unidades disponibles"required/>
                    </div>
                    <br />
                    <div className='sector'>
                    <label>Imagen: </label>
                    <br />
                    <input type="file" accept="image/*" name="image" required/>
                    </div>
                    <div className='botones'>

                    <button className='boton' type="submit"> Publicar </button>
                    {/* <button className='boton' onClick= {() => console.log(products)}>TEST</button> */}
                    <button className='boton' onClick={() => navigate('../')}>Back to Home</button>
                    <button className='boton' onClick={() => navigate('../products')}>My products </button>
                    </div>
                    
            </form> }
    </div>
)
}

export default AddProduct
