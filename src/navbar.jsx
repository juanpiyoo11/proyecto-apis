import skoLogo from "./imagenes/sko.png";
import search from "./imagenes/search.svg";
import carritoIcono from "./imagenes/shopping-cart.svg";
import user from "./imagenes/user.svg";
import "./css/navbar.css";
import "./css/carrito.css";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import Carrito from "./carrito.jsx";
import React, { useEffect, useState } from "react";
import { Badge } from "@chakra-ui/react";
import { obtenerItemsCarrito } from "./js/carritoService.js";

function Navbar() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const [submenuActive, setSubmenuActive] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    if (!submenuActive) {
      setMenuVisible(false);
    }
  };

  const handleSubmenuEnter = () => {
    setSubmenuActive(true);
  };

  const handleSubmenuLeave = () => {
    setSubmenuActive(false);
    setMenuVisible(false);
  };

  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUserEnter = () => {
    setShowUserMenu(true);
  };

  const handleUserLeave = () => {
    setShowUserMenu(false);
  };

  const [carritoVisible, setCarritoVisible] = useState(false);

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  const cerrarCarrito = () => {
    setCarritoVisible(false);
  };

  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      navigate(`/resultados/emptySearch`, { replace: true });
    } else {
      navigate(`/resultados/${query}`, { replace: true });
    }
  };

  useEffect(() => {
    const carrito = obtenerItemsCarrito();
    if (carrito) {
      setProductos(carrito);
    }
  }, []);

  let carrito = obtenerItemsCarrito();
  return (
    <>
      <div className="parteSuperior">
        <div className="contenedor-1">
          <div className="contenedor-logo">
            <img className="sko" src={skoLogo} alt="" onClick={() => navigate("/home")} />
          </div>
          <div className="contenedor-buscador">
            {/* <input className='buscador' type="text" placeholder='  Buscar...'/>
                    <button className='submit'><img src={search} alt="Buscar" /></button> */}
            <form onSubmit={handleSubmit}>
              <input className="buscador" type="text" placeholder="  Buscar..." value={query} onChange={(e) => setQuery(e.target.value)} />
              <button className="submit" type="submit">
                <img src={search} alt="Buscar" />
              </button>
            </form>
          </div>
          <div className="contenedor-session">
            <div className="user" onMouseEnter={handleUserEnter} onMouseLeave={handleUserLeave}>
              <img src={user} alt="" />
              {showUserMenu && (
                <div id="userDropdown" className="dropdown-content" onMouseEnter={handleUserEnter} onMouseLeave={handleUserLeave}>
                  <a href="#" className="decoracion-enlace nombre2">
                    {" "}
                    Mi Cuenta
                  </a>
                  <a href="#" className="decoracion-enlace nombre2">
                    Mis Pedidos
                  </a>
                  <a href="#" className="decoracion-enlace nombre2" onClick={() => navigate("/products")}>
                    Mis Productos
                  </a>
                  <a href="#" className="decoracion-enlace nombre2">
                    Cerrar Sesion
                  </a>
                </div>
              )}
            </div>

            <button className="carrito" onClick={toggleCarrito}>
              <img src={carritoIcono} alt="" />
              {carrito.length > 0 && (
                <Badge ml="1" fontSize="0.8em" colorScheme="green">
                  {carrito.length}
                </Badge>
              )}
            </button>
            {carritoVisible && <Carrito cerrarCarrito={cerrarCarrito} />}
          </div>
        </div>
        <div className="contenedor-2">
          <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className="nombre" onClick={() => navigate("/resultados/emptySearch")}>
              Calzado
            </a>
            <div className="nombre menu1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Marca
            </div>
            <ul className={`submenu uno ${menuVisible ? "show" : ""}`} onMouseEnter={handleSubmenuEnter} onMouseLeave={handleSubmenuLeave}>
              <div className="submenu-column menu1">
                <li>
                  <a className="decoracion-enlace menu1" onClick={() => navigate("/resultados/puma")}>
                    Puma
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/adidas")}>
                    Adidas
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/nike")}>
                    Nike
                  </a>
                </li>
              </div>
              <div className="submenu-column1 menu1">
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/crocs")}>
                    Crocs
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/converse")}>
                    Converse
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/vans")}>
                    Vans
                  </a>
                </li>
              </div>
              <div className="submenu-column2 menu1">
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/rebook")}>
                    Rebook
                  </a>
                </li>
                <li>
                  <a className="decoracin-enlace" onClick={() => navigate("/resultados/fila")}>
                    Fila
                  </a>
                </li>
              </div>
            </ul>

            <div className="nombre menu1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Estilo
            </div>
            <ul className={`submenu uno ${menuVisible ? "show" : ""}`} onMouseEnter={handleSubmenuEnter} onMouseLeave={handleSubmenuLeave}>
              <div className="submenu-column menu1">
                <li>
                  <a className="decoracion-enlace menu1" onClick={() => navigate("/resultados/street")}>
                    Streetwear
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/casual")}>
                    Casual
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/skate")}>
                    Skate
                  </a>
                </li>
              </div>
              <div className="submenu-column1 menu1">
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/retro")}>
                    Retro
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/running")}>
                    Running
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/slip-on")}>
                    Slip-on
                  </a>
                </li>
              </div>
              <div className="submenu-column2 menu1">
                <li>
                  <a className="decoracin-enlace" onClick={() => navigate("/resultados/high-top")}>
                    High-top
                  </a>
                </li>
                <li>
                  <a className="decoracion-enlace" onClick={() => navigate("/resultados/eco-friendly")}>
                    Eco-friendly
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
