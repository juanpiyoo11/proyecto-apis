import React, { useState, useEffect } from "react";
import imagen1 from "./imagenes/imagen1.jpg";
import imagen2 from "./imagenes/imagen2.jpg";
import imagen3 from "./imagenes/imagen3.jpg";
import "./css/carrusel.css";

function Carrusel() {
  const [index, setIndex] = useState(0);

  const slides = [
    { imagen: imagen1, alt: "Imagen 1" },
    { imagen: imagen2, alt: "Imagen 2" },
    { imagen: imagen3, alt: "Imagen 3" },
  ];

  const siguienteSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const intervalo = setInterval(siguienteSlide, 3000); // Cambiar de slide cada 3 segundos
    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonta
  }, []);

  const cambiarSlide = (indice) => {
    setIndex(indice);
  };

  return (
    <div className="carrusel">
      <div className="slides">
        {slides.map((slide, i) => (
          <div key={i} className="slide" style={{ display: i === index ? "block" : "none" }}>
            <img src={slide.imagen} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="navegacion">
        {slides.map((_, i) => (
          <span key={i} className={`punto ${i === index ? "activo" : ""}`} onClick={() => cambiarSlide(i)}></span>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
