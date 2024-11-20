document.addEventListener("DOMContentLoaded", () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const entrada = document.getElementById("entrada-numero");
    const boton = document.getElementById("verificar");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", () => {
        const intento = parseInt(entrada.value, 10);

        if (isNaN(intento) || intento < 1 || intento > 100) {
            mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        } else if (intento < numeroAleatorio) {
            mensaje.textContent = "Demasiado bajo. ¡Intenta nuevamente!";
        } else if (intento > numeroAleatorio) {
            mensaje.textContent = "Demasiado alto. ¡Intenta nuevamente!";
        } else {
            mensaje.textContent = `¡Correcto! El número era ${numeroAleatorio}.`;
            boton.disabled = true;
        }
    });
});
