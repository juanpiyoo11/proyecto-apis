const slides = document.querySelectorAll('.slide');
const puntos = document.querySelectorAll('.punto');
let index = 0;

function mostrarSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  puntos.forEach((punto) => {
    punto.classList.remove('activo');
  });
  slides[n].style.display = 'block';
  puntos[n].classList.add('activo');
}

function siguienteSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  mostrarSlide(index);
}

function slideAutomatico() {
  setInterval(siguienteSlide, 3000); // Cambiar de slide cada 3 segundos
}

slideAutomatico();

puntos.forEach((punto, i) => {
  punto.addEventListener('click', () => {
    mostrarSlide(i);
    index = i;
  });
});
