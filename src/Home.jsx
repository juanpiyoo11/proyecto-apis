import Carrusel from "./carrusel.jsx";
import Productos from "./HomeProductList.jsx";
import { Outlet } from "react-router-dom/dist/index.js";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carrusel />
      <Productos />
    </div>
  );
}

export default Home;
