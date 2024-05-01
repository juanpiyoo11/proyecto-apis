import React from 'react';
import { useState, useEffect } from "react";
import Products from './products';

const abmProducts = () => {
    const [newBrand, setBrand] = useState({});
    const [newCategory, setCategory] = useState({});
    const [newName, setName] = useState({});
    const [newPrice, setPrice] = useState({});
    const [newSize, setSize] = useState({});
    const [newColor, setColor] = useState({});
    const [newSex, setSex] = useState({});
    const [newStock, setStock] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])
    
    // const handlePublicar = (e) => {
    //     e.preventDefault();
    //     setProducts([...products, {
    //         id: count,
    //         publisherId: 1, //por ahora tenemos un publisher hardcodeado, en la segunda entrega con
    //         //configuracion de cuentas, deberiamos asignar el id del que esta publicando
    //         brand: newBrand,
    //         category: newCategory,
    //         name: newName,
    //         price: newPrice,
    //         size: newSize,
    //         color: newColor,
    //         sex: newSex,
    //         stock: newStock
    //     }])
    //     setCount((count) => count + 1);
    // };

    const deleteProduct = (index) => {
        const newProducts = [...products]
        newProducts.splice(index, 1)
        setProducts(newProducts)
    }

    // const updateProduct = (productId) => {
    //     const updatedProducts = products.map(product => {       
    //         if (product.id === productId) {
    //             if(typeof newBrand === 'string' && newBrand.trim() !== ""){
    //                 product.brand = newBrand
    //             }
    //             if(typeof newName === 'string' && newName.trim() !== ""){
    //                 product.name = newName
    //             }
    //             if(typeof newCategory === 'string' && newCategory.trim() !== ""){
    //                 product.category = newCategory
    //             }
    //             if(typeof newPrice === 'string' && newPrice.trim() !== ""){
    //                 product.price = newPrice
    //             }
    //             if(typeof newSize === 'string' && newSize.trim() !== ""){
    //                 product.size = newSize
    //             }
    //             if(typeof newColor === 'string' && newColor.trim() !== ""){
    //                 product.color = newColor
    //             }
    //             if(typeof newSex === 'string' && newSex.trim() !== ""){
    //                 product.sex = newSex
    //             }
    //             if(typeof newStock === 'string' && newStock.trim() !== ""){
    //                 product.stock = newStock
    //             }
                
    //         }
    //         return product;
    //     });
    
    //     setProducts(updatedProducts);
    // };
    
    

    const handleBrand = (event) => setBrand(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);
    const handleName = (event) => setName(event.target.value);
    const handlePrice = (event) => setPrice(event.target.value);
    const handleSize = (event) => setSize(event.target.value);
    const handleColor = (event) => setColor(event.target.value);
    const handleSex = (event) => setSex(event.target.value);
    const handleStock = (event) => setStock(event.target.value);

return (
    <div>
        {/* { <form onSubmit={handlePublicar}>
            <h1>Agregar un producto</h1>
                <label>Marca: </label><input type="text" name="brand" onChange={handleBrand} placeholder="Ej: Nike" required/>
                <label>Nombre: </label><input type="text" name="name" onChange={handleName} placeholder="Ej: Air Force 1" required/>
                <label>Categoria: </label><input type="text" name="category" onChange={handleCategory} placeholder="Ej: Zapatillas" required/>
                <label>Precio: </label><input type="number" name="price" onChange={handlePrice} placeholder="Ej: 119999" required/>

                <select name="size" onChange={handleSize} required>
                <option value="">Seleccione un talle</option>
                {[...Array(15).keys()].map((index) => (
                <option key={index} value={7 + index * 0.5}>
                {7 + index * 0.5}
                </option>
                ))}
                </select>
                <label>Color: </label><input type="text" name="color" onChange={handleColor} placeholder="Seleccione todos los colores disponibles" required/>

                <label>Sexo: </label>
                <label><input type="radio" name="sex" value="F" onChange={handleSex} required/> F</label>
                <label><input type="radio" name="sex" value="M" onChange={handleSex} required/> M</label>
                <label><input type="radio" name="sex" value="Unisex" onChange={handleSex} required/> Unisex</label>
                <label>Stock: </label><input type="number" min="1" name="stock" onChange={handleStock} placeholder="Ingrese unidades disponibles"required/>
            <button type="submit"> Publicar </button>
        </form> } */}
        <h1>Mis Productos</h1>
        {products.map((item, index) => (
                <Products deleteProduct={deleteProduct} key={index} 
                index={index} id={item.id} publisherId={item.publisherId} brand={item.brand} name={item.name} 
                category={item.category} price={item.price} size={item.size} color={item.color}
                sex={item.sex} stock={item.stock}/>
        ))}
    </div>
    
)
};

export default abmProducts;
