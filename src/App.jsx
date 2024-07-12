
import { useState } from "react";
import "./css/App.css";
import Navbar from "./Navbar.jsx";
import Pie from "./Footer.jsx";
import PaginaProducto from "./ProductDetail.jsx";
import ProductPage from "./ProductPage.jsx";
import AddProduct from "./AddProduct.jsx";
import ModifyProduct from "./ModifyProduct.jsx";
import { Routes, Route, redirect } from "react-router-dom";
import Home from "./Home.jsx";
import SearchBar from "./SearchBar.jsx"
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import SessionForm from "./SessionForm.jsx";
import RegisterForm from "./RegisterForm.jsx";
import Orders from "./Orders.jsx"

function App() {
    const [count, setCount] = useState(0);

    const redirectHome = () => {

        return redirect("/home");
    };

    return (
        <>
            <ChakraProvider>
                <div className="contenedor-todo">
                    <div className="navbar">
                        <Navbar/>
                    </div>


                    <div className="abm">
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/products" element={<ProductPage/>}/>
                            <Route path="/product/:id" element={<PaginaProducto/>}/>
                            <Route path="/addproducts" element={<AddProduct/>}/>
                            <Route path="/resultados/:query" element={<SearchBar/>}/>
                            <Route path="/modifyproducts/:id" element={<ModifyProduct/>}/>
                            <Route path="/login" element={<SessionForm/>}/>
                            <Route path="/register" element={<RegisterForm/>}/>
                            <Route path="/orders" element={<Orders/>}/>
                        </Routes>
                    </div>
                    
                    <div className="footer">
                        <Pie/>
                    </div>
                </div>
            </ChakraProvider>
        </>

    );
}

export default App;
