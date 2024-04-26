import React from 'react';
import { useState } from "react";
import Products from './products';
const abmProducts = () => {
    const [count, setCount] = useState(4);
    const [newBrand, setBrand] = useState({});
    const [newName, setName] = useState({});
    const [newCategory, setCategory] = useState({});
    const [newPrice, setPrice] = useState({});
    const [newSize, setSize] = useState({});
    const [newColor, setColor] = useState({});
    const [products, setProducts] = useState([
        {id: "1", brand: "Nike", name: "Air Force 1", category: "Shoes", price: "149999", size: "10", color: "White"},
        {id: "2", brand: "Adidas", name: "Superstars", category: "Shoes", price: "119999", size: "8", color: "White"},
        {id: "3", brand: "Puma", name: "Pro Classic Unisex", category: "Shoes", price: "99999", size: "9.5", color: "White"}
    ]);
    
    const handlePublicar = () => {
        if(typeof newBrand !== 'string' || newBrand.trim() === ""){
            alert("Complete los campos")
            return;
        }
        if(typeof newName !== 'string' || newName.trim() === ""){
            alert("Complete los campos")
            return;
        }
        if(typeof newCategory !== 'string' || newCategory.trim() === ""){
            alert("Complete los campos")
            return;
        }
        if(typeof newPrice !== 'string' || newPrice.trim() === ""){
            alert("Complete los campos")
            return;
        }
        if(typeof newSize !== 'string' || newSize.trim() === ""){
            alert("Complete los campos")
            return;
        }
        if(typeof newColor !== 'string' || newColor.trim() === ""){
            alert("Complete los campos")
            return;
        }
        setProducts([...products, {
            id: count,
            brand: newBrand,
            name: newName,
            category: newCategory,
            price: newPrice,
            size: newSize,
            color: newColor
        }])
        setCount((count) => count + 1);
    };

    const deleteProduct = (index) => {
        const newProducts = [...products]
        newProducts.splice(index, 1)
        setProducts(newProducts)
    }

    const updateProduct = (productId) => {
        const updatedProducts = products.map(product => {
            // const updatedFields = {};
                
            if (product.id === productId) {
                if(typeof newBrand === 'string' && newBrand.trim() !== ""){
                    product.brand = newBrand
                }
                if(typeof newName === 'string' && newName.trim() !== ""){
                    product.name = newName
                }
                if(typeof newCategory === 'string' && newCategory.trim() !== ""){
                    product.category = newCategory
                }
                if(typeof newPrice === 'string' && newPrice.trim() !== ""){
                    product.price = newPrice
                }
                if(typeof newSize === 'string' && newSize.trim() !== ""){
                    product.size = newSize
                }
                if(typeof newColor === 'string' && newColor.trim() !== ""){
                    product.color = newColor
                }
                
            }
            return product;
        });
    
        setProducts(updatedProducts);
    };
    
    

    const handleBrand = (event) => setBrand(event.target.value);
    const handleName = (event) => setName(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);
    const handlePrice = (event) => setPrice(event.target.value);
    const handleSize = (event) => setSize(event.target.value);
    const handleColor = (event) => setColor(event.target.value);

return (
    <div>
        { <form onSubmit={(e) => e.preventDefault()}>
            <h1>Agregar un producto</h1>
            <ul>
                <li>Marca: <input type="text" name="brand" onChange={handleBrand} placeholder="Ej: Nike"/></li>
                <li>Nombre: <input type="text" name="name" onChange={handleName} placeholder="Ej: Air Force 1"/></li>
                <li>Categoria: <input type="text" name="category" onChange={handleCategory} placeholder="Ej: Zapatillas"/></li>
                <li>Precio: <input type="text" name="price" onChange={handlePrice} placeholder="Sin puntos ni comas"/></li>
                <li>Talles disponibles: <input type="text" name="size" onChange={handleSize} placeholder="Seleccione todos los talles disponibles"/></li>
                <li>Color: <input type="text" name="color" onChange={handleColor} placeholder="Seleccione todos los colores disponibles"/></li>
            </ul>
            <button onClick = {handlePublicar}> Publicar </button>

        </form> }
        <h1>Mis Productos</h1>
        {products.map((item, index) => (
                <Products deleteProduct={deleteProduct} updateProduct={updateProduct} key={index} index={index} id={item.id} brand={item.brand} name={item.name} category={item.category} price={item.price} size={item.size} color={item.color}/>
        ))}
    </div>
)
};

export default abmProducts;
