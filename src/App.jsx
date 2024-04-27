import { useState } from "react";
import "./css/App.css";
import Carrusel from "./carrusel.jsx";
import Navbar from "./navbar";
import Productos from "./productos.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='contenedor-todo'>
      <div className="navbar">
      <Navbar/> 
      </div>
      <div className="carrusel">
        <Carrusel  /> 
      </div>
      <div>
      <Productos />

      </div>
    </div>
    </>
  );
}

export default App;
