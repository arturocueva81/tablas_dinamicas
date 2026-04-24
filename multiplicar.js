function generarTablas() {
    let contenedor = document.getElementById("contenedorTabla");
    let inputUsuario = document.getElementById("numTabla");
    let numero = parseInt(inputUsuario.value);

    if (isNaN(numero)) {
        contenedor.innerHTML = `
            <div class="espera-datos" style="color: #ff7b72;">
                <i class="fas fa-exclamation-triangle"></i>
                <p>ERROR: Por favor, ingresa un número válido primero.</p>
            </div>`;
        return;
    }

    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido += `
            <div class="fila">
                <span>${numero} x ${i}</span> 
                <span>=</span> 
                <strong>${numero * i}</strong>
            </div>`;
    }
    contenedor.innerHTML = contenido;
}