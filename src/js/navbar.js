// Opcional: cerrar el menú al hacer clic fuera de él
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu");
    if (menu && !menu.contains(event.target)) {
        menu.querySelector(".submenu").style.display = "none";
    }
});
