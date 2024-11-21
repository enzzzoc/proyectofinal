// Función para actualizar la tabla dinámicamente
function actualizarTabla() {
    const nombre = document.getElementById('nombre').value || '';
    const apellido = document.getElementById('apellido').value || '';
    const email = document.getElementById('email').value || '';
    const telefono = document.getElementById('telefono').value || '';
    const edad = document.getElementById('edad').value || '';
    const direccion = document.getElementById('direccion').value || '';
    const provincia = document.getElementById('provincia').value || '';
    const codigoPostal = document.getElementById('codigo_postal').value || '';
    const contacto = document.querySelector('input[name="contacto"]:checked')?.value || '';
    const suscripcion = Array.from(document.querySelectorAll('input[name="suscripcion"]:checked'))
                             .map(el => el.value).join(', ') || '';

    // Actualiza la tabla con los datos ingresados
    const tabla = document.getElementById('tablaDatos');
    tabla.innerHTML = `
        <tr><td>Nombre</td><td>${nombre}</td></tr>
        <tr><td>Apellido</td><td>${apellido}</td></tr>
        <tr><td>Email</td><td>${email}</td></tr>
        <tr><td>Teléfono</td><td>${telefono}</td></tr>
        <tr><td>Edad</td><td>${edad}</td></tr>
        <tr><td>Dirección</td><td>${direccion}</td></tr>
        <tr><td>Provincia</td><td>${provincia}</td></tr>
        <tr><td>Código Postal</td><td>${codigoPostal}</td></tr>
        <tr><td>Método de Contacto</td><td>${contacto}</td></tr>
        <tr><td>Tipo de Suscripción</td><td>${suscripcion}</td></tr>
    `;
}

// Agrega un listener global para detectar cambios en todos los campos
document.getElementById('contactForm').addEventListener('input', actualizarTabla);
document.getElementById('contactForm').addEventListener('change', actualizarTabla);


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

