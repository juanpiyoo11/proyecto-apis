import { useState } from "react";
import "./css/App.css";
import Carrusel from "./carrusel.jsx";
import Navbar from "./navbar";
import Productos from "./productos.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Carrusel />
      <Productos />
    </>
  );
}

export default App;
