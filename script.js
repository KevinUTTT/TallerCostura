function buscarUsuario() {
    let filtro = document.getElementById("searchInput").value.toLowerCase();
    let filas = document.querySelectorAll("#userTable tbody tr");

    filas.forEach(fila => {
        let textoFila = fila.innerText.toLowerCase();
        fila.style.display = textoFila.includes(filtro) ? "" : "none";
    });
}

document.getElementById("registro-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registro exitoso (esta es una simulación).");
});
