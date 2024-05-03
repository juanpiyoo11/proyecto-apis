import skoLogo from './imagenes/sko.png'
import search from './imagenes/search.svg'
import carritoIcono from './imagenes/shopping-cart.svg'
import user from './imagenes/user.svg'
import './css/navbar.css'
import './css/carrito.css'
import {useNavigate, Routes, Route, Link} from 'react-router-dom'
import Carrito from './carrito.jsx'
import React, { useState } from 'react';
function navbar(){
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

    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/resultados/${query}`, { replace: true });
      };
    return(
        <>
        <div className='parteSuperior'>
            <div className='contenedor-1'>
                <div className='contenedor-logo'>
                    <img className='sko' src={skoLogo} alt="" onClick={() => navigate('/home')}/>
                </div>
                <div className='contenedor-buscador'>
                    {/* <input className='buscador' type="text" placeholder='  Buscar...'/>
                    <button className='submit'><img src={search} alt="Buscar" /></button> */}
                    <form onSubmit={handleSubmit}>
                        <input className='buscador' type="text" placeholder='  Buscar...' value={query} onChange={(e) => setQuery(e.target.value)}/>
                        <button className='submit' type="submit"> <img src={search} alt="Buscar" /></button>
                    </form>
                </div>
                <div className='contenedor-session'>
                    <div className='user' onMouseEnter={handleUserEnter} onMouseLeave={handleUserLeave}>
                        <img src={user} alt="" />
                        {showUserMenu && (
                            <div id="userDropdown" className="dropdown-content" onMouseEnter={handleUserEnter} onMouseLeave={handleUserLeave}>
                                <a href="#" className='decoracion-enlace nombre2'> Mi Cuenta</a>
                                <a href="#" className='decoracion-enlace nombre2'>Mis Pedidos</a>
                                <a href="#" className='decoracion-enlace nombre2' onClick={() => navigate('/products')}>Mis Productos</a>
                                <a href="#" className='decoracion-enlace nombre2'>Cerrar Sesion</a>
                            </div>
                        )}
                    </div>
                    
                    <button className='carrito' onClick={toggleCarrito}>
                            <img src={carritoIcono} alt="" />
                    </button>
                    {carritoVisible && <Carrito cerrarCarrito={cerrarCarrito} />}
                    
                </div>
                
            </div>
            <div className="contenedor-2">
                    <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a href="/src/prueba" className="nombre">Calzado</a>
                        <div className="nombre menu1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Marca</div>
                        <ul className={`submenu uno ${menuVisible ? 'show' : ''}`} onMouseEnter={handleSubmenuEnter} onMouseLeave={handleSubmenuLeave}>
                        <div className="submenu-column menu1">
                            <li><a href="" className='decoracion-enlace menu1'>Puma</a></li>
                            <li><a href="#" className='decoracion-enlace'>Adidas</a></li>
                            <li><a href="#" className='decoracion-enlace'>Nike</a></li>
                        </div>
                        <div className="submenu-column1 menu1">
                            <li><a href="#" className='decoracion-enlace'>Adidas</a></li>
                            <li><a href="#" className='decoracion-enlace'>Crocs</a></li>
                            <li><a href="#" className='decoracion-enlace'>Converse</a></li>
                        </div>
                        <div className="submenu-column2 menu1">
                            <li><a href="#" className='decoracin-enlace'>Fila</a></li>
                            <li><a href="#" className='decoracion-enlace'>Vans</a></li>
                            <li><a href="#" className='decoracion-enlace'>Rebook</a></li>
                        </div>
                        </ul>

                        <div className="nombre menu1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Estilo</div>
                        <ul className={`submenu uno ${menuVisible ? 'show' : ''}`} onMouseEnter={handleSubmenuEnter} onMouseLeave={handleSubmenuLeave}>
                        <div className="submenu-column menu1">
                            <li><a href="" className='decoracion-enlace menu1'>Streetwear</a></li>
                            <li><a href="#" className='decoracion-enlace'>Casual</a></li>
                            <li><a href="#" className='decoracion-enlace'>Deportivas</a></li>
                        </div>
                        <div className="submenu-column1 menu1">
                            <li><a href="#" className='decoracion-enlace'>Skate</a></li>
                            <li><a href="#" className='decoracion-enlace'>Retro</a></li>
                            <li><a href="#" className='decoracion-enlace'>Running</a></li>
                        </div>
                        <div className="submenu-column2 menu1">
                            <li><a href="#" className='decoracin-enlace'>High-top</a></li>
                            <li><a href="#" className='decoracion-enlace'>Slip-on</a></li>
                            <li><a href="#" className='decoracion-enlace'>Eco-friendly</a></li>
                        </div>
                        </ul>
                        <a href="/src/prueba" className="nombre">Hombre</a>
                        <a href="/src/prueba" className="nombre">Mujer</a>
                    </div>
                </div>
            
        </div>

        </>
    )
}

export default navbar;