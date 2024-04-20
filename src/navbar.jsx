import skoLogo from './imagenes/sko.png'
import search from './imagenes/search.svg'
import carrito from './imagenes/shopping-cart.svg'
import user from './imagenes/user.svg'
import './css/navbar.css'
import './navbar'

import React, { useState } from 'react';
function navbar(){
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
    return(
        <>
        <div className='parteSuperior'>
            <div className='contenedor-1'>
                <div className='contenedor-logo'>
                    <img className='sko' src={skoLogo} alt="" />
                </div>
                <div className='contenedor-buscador'>
                    <input className='buscador' type="text" placeholder='  Buscar...'/>
                    <button className='submit'><img src={search} alt="Buscar" /></button>
                </div>
                <div className='contenedor-session'>
                    <button className='user'><img src={user} alt="" /></button>
                    <button className='carrito'><img src={carrito} alt="" /></button>
                </div>

            </div>
            <div className="contenedor-2">
                    <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a href="/src/prueba" className="nombre">Calzado</a>
                        <a href="" className="nombre">Indumentaria</a>

                        <div className="nombre menu1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hombre</div>
                        <ul className={`submenu uno ${menuVisible ? 'show' : ''}`} onMouseEnter={handleSubmenuEnter} onMouseLeave={handleSubmenuLeave}>
                            <li><a href=""  className='decoracion-enlace'>Indumentaria</a></li>
                            <li><a href="#"  className='decoracion-enlace'>Calzado</a></li>
                        </ul>

                        <div className='nombre menu2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Mujer</div>
                        <ul className={`submenu dos ${menuVisible ? 'show' : ''}`} onMouseEnter={handleSubmenuEnter} onMouseLeave={handleSubmenuLeave}>
                            <li><a href="" className='decoracion-enlace'>Indumentaria</a></li>
                            <li><a href="#" className='decoracion-enlace'>Calzado</a></li>
                            
                        </ul>
                    </div>
                </div>
            
        </div>

        </>
    )
}

export default navbar;