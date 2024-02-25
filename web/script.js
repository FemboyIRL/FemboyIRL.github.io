    document.addEventListener("DOMContentLoaded", function() {
    var imagenes = document.querySelectorAll("img");
    
    
    
  function toggleTamaño() {
      if (this.style.transform === "scale(1.5)") {
        this.style.transform = "scale(1)"; // Restaura el tamaño original de la imagen
      } else {
        this.style.transform = "scale(1.5)"; // Escala la imagen al 150% del tamaño original
      }
    }

    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", toggleTamaño);
    });
});