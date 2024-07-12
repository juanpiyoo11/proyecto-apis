import Carrusel from "./Carrusel.jsx";
import Productos from "./HomeProductList.jsx";
import { Outlet } from "react-router-dom/dist/index.js";
import { useSelector } from 'react-redux';

function Home() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carrusel />
      <Productos />
    </div>
  );
}

export default Home;
