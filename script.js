const abrirBtn = document.getElementById("abrirBtn");
const cerrarBtn = document.getElementById("cerrarBtn");
const ventana = document.getElementById("ventana");

// Abrir la ventana
abrirBtn.addEventListener("click", function() {
    ventana.style.display = "flex";
});

// Cerrar la ventana
cerrarBtn.addEventListener("click", function() {
    ventana.style.display = "none";
});