function generarTablas() {

    let contenedor = document.getElementById("contenedorTabla");
    let inputUsuario = document.getElementById("numTabla");
    let numeroTabla = parseInt(inputUsuario.value) || 0; 
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabla * i;
        contenido += `
            <div class="fila">
                <span>${numeroTabla} x ${i}</span> 
                <span>=</span> 
                <strong>${resultado}</strong>
            </div>`;
    }
    contenedor.innerHTML = contenido;
    console.log("Tabla generada exitosamente para el valor: " + numeroTabla);
}