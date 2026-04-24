function generarTablas() {
    let contenedor = document.getElementById("contenedorTabla");
    let contenido = "";
    let numeroTabla = 5; 

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
}