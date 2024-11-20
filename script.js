// Muestra el botón de "Volver al inicio" cuando se hace scroll
window.onscroll = function() {
    const backToTopButton = document.querySelector(".back-to-top");
    if (document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Función para desplazarse al inicio suavemente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para alternar entre mostrar el currículum abreviado y completo
function toggleCV() {
    const cvCompleto = document.getElementById("cv-completo");
    const cvAbreviado = document.getElementById("cv-abreviado");
    const isHidden = cvCompleto.style.display === "none";
    
    if (isHidden) {
        cvCompleto.style.display = "block";
        cvAbreviado.style.display = "none";  // Oculta el texto abreviado si el CV completo se muestra
    } else {
        cvCompleto.style.display = "none";
        cvAbreviado.style.display = "block";  // Muestra el texto abreviado si el CV completo se oculta
    }
}
