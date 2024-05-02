import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductsByNameBrand } from './js/productServices';
import './css/searchFilter.css'
const searchBar = () => {
    const {query} = useParams();
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    useEffect(() => {
        getProductsByNameBrand(query).then((data) => {setProducts(data); setOriginalProducts(data)})
    }, [query, setProducts]);

    const [filters, setFilters] = useState({
    brand: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    size: '',
    color: '',
    sex: '',
    });

    const resetFilters = () => {
        setFilters({
          brand: "",
          category: "",
          minPrice: "",
          maxPrice: "",
          size: "",
          color: "",
          sex: "",
        });
      };
    
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        // Utiliza `products` como punto de partida para aplicar los filtros
        let filtered = [...originalProducts];
    
        // Convertir precios a números para filtrar los precios
        filtered = filtered.map(product => ({
            ...product,
            price: parseFloat(product.price)
        }));
    
        // Aplicar filtros
        if (filters.brand) {
            filtered = filtered.filter(product =>
                product.brand.toLowerCase().includes(filters.brand.toLowerCase())
            );
        }
        if (filters.category) {
            filtered = filtered.filter(product =>
                product.category.toLowerCase().includes(filters.category.toLowerCase())
            );
        }
    
        if (filters.minPrice !== "" && filters.maxPrice !== "") {
            filtered = filtered.filter(
                (product) =>
                    product.price >= parseFloat(filters.minPrice) && product.price <= parseFloat(filters.maxPrice)
            );
        } else if (filters.minPrice !== "") {
            filtered = filtered.filter((product) => product.price >= parseFloat(filters.minPrice));
        } else if (filters.maxPrice !== "") {
            filtered = filtered.filter((product) => product.price <= parseFloat(filters.maxPrice));
        }
    
        if (filters.size) {
            filtered = filtered.filter(product => product.size === filters.size);
        }
        if (filters.color) {
            filtered = filtered.filter(product =>
                product.color.toLowerCase().includes(filters.color.toLowerCase())
            );
        }
        if (filters.sex) {
            filtered = filtered.filter(product => product.sex === filters.sex);
        }
        setProducts(filtered);
    };
    

    
  return (
    <>
    <div className='contenedor-filtros'>
    <h1>Filtros</h1>
        <input type="text" name="brand" placeholder="Marca" value={filters.brand} onChange={handleFilterChange} />
        <input type="text" name="category" placeholder = "Categoria"value={filters.category} onChange={handleFilterChange} />
        <input type="number" name="minPrice" value={filters.minPrice} placeholder="Precio desde"onChange={handleFilterChange} />
        <input type="number" name="maxPrice" value={filters.maxPrice} placeholder="Precio hasta"onChange={handleFilterChange} />
        <select name="size" value={filters.size} onChange={handleFilterChange}>
                <option value="">Talle</option>
                {[...Array(15).keys()].map((index) => (
                <option key={index} value={7 + index * 0.5}>
                {7 + index * 0.5}
                </option>
                ))}
                </select>
        <input type="text" name="color" placeholder="Color" value={filters.color} onChange={handleFilterChange} />
        <select name="sex" value={filters.sex} onChange={handleFilterChange}>
            <option value="">Sexo</option>
            <option value="F">F</option>
            <option value="M">M</option>
            <option value="Unisex">Unisex</option>
        </select>
        <div className='bot'>
        <button onClick={applyFilters}>Aplicar filtros</button>
        </div>
        <button onClick={resetFilters}>Borrar filtros</button>
    </div>
    <div className='contenedor-productos'>
        {products.map((product) => (
        <div key={product.id} className="tarjeta_producto_filter">
          <img src={product.image} alt={product.name} className="imagen_producto_filter" />
          <h2 className="nombre_producto_filter">{product.brand} {product.name}</h2>
          <p className="precio_producto_filter">${product.price}</p>
          <button className="btn_comprar_filter">Agregar al carrito</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default searchBar
