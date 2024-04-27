import React from 'react'
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const AddProduct =()=> {
    const navigate = useNavigate();

    const [count, setCount] = useState(4);
    const [products, setProducts] = useState([]);
    // const [newBrand, setBrand] = useState({});
    // const [newCategory, setCategory] = useState({});
    // const [newName, setName] = useState({});
    // const [newPrice, setPrice] = useState({});
    // const [newSize, setSize] = useState({});
    // const [newColor, setColor] = useState({});
    // const [newSex, setSex] = useState({});
    // const [newStock, setStock] = useState({});

    // const handleBrand = (event) => setBrand(event.target.value);
    // const handleCategory = (event) => setCategory(event.target.value);
    // const handleName = (event) => setName(event.target.value);
    // const handlePrice = (event) => setPrice(event.target.value);
    // const handleSize = (event) => setSize(event.target.value);
    // const handleColor = (event) => setColor(event.target.value);
    // const handleSex = (event) => setSex(event.target.value);
    // const handleStock = (event) => setStock(event.target.value);

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])

    const handlePublicar = (e) => {
        e.preventDefault();
        setProducts([...products, {
            id: count,
            publisherId: 1, //por ahora tenemos un publisher hardcodeado, en la segunda entrega con
            //configuracion de cuentas, deberiamos asignar el id del que esta publicando
            brand: document.getElementsByName("brand")[0].value,
            category: document.getElementsByName("name")[0].value,
            name: document.getElementsByName("category")[0].value,
            price: document.getElementsByName("price")[0].value,
            size: document.getElementsByName("size")[0].value,
            color: document.getElementsByName("color")[0].value,
            sex: document.querySelector('input[name="sex"]:checked').value,
            stock: document.getElementsByName("stock")[0].value,
            // brand: newBrand,
            // category: newCategory,
            // name: newName,
            // price: newPrice,
            // size: newSize,
            // color: newColor,
            // sex: newSex,
            // stock: newStock
        }])
        setCount((count) => count + 1);
        alert("Publicado con exito");
    };
  return (
    <div>
            { <form onSubmit={handlePublicar}>
                <h1>Agregar un producto</h1>
                <label>Marca: </label><input type="text" name="brand" placeholder="Ej: Nike" required/>
                
                <label>Nombre: </label><input type="text" name="name" placeholder="Ej: Air Force 1" required/>
                
                <label>Categoria: </label><input type="text" name="category" placeholder="Ej: Zapatillas" required/>
                
                <label>Precio: </label><input type="number" name="price" placeholder="Ej: 119999" required/>

                <select name="size" required>
                <option value="">Seleccione un talle</option>
                {[...Array(15).keys()].map((index) => (
                <option key={index} value={7 + index * 0.5}>
                {7 + index * 0.5}
                </option>
                ))}
                </select>
                
                <label>Color: </label><input type="text" name="color" placeholder="Seleccione todos los colores disponibles" required/>

                <label>Sexo: </label>
                
                <label><input type="radio" name="sex" value="F" required/> F</label>
                
                <label><input type="radio" name="sex" value="M" required/> M</label>
                
                <label><input type="radio" name="sex" value="Unisex" required/> Unisex</label>
                
                <label>Stock: </label><input type="number" min="1" name="stock" placeholder="Ingrese unidades disponibles"required/>
                
                <button type="submit"> Publicar </button>
            </form> }
            <button onClick= {() => console.log(products)}>TEST</button>
            <button onClick={() => navigate('../home')}>Back to Home</button>
    </div>
)
}

export default AddProduct
