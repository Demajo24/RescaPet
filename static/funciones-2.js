/*animacion de galeria perdidos */

   var animar= document.getElementById ('cajita');

// Agregar evento de mouseover al contenedor
  animar.addEventListener('mouseover', function() {
    cajita.style.transform = 'rotate(5deg)'; // Aumentar el tamaño de la imagen
  });
  
  // Agregar evento de mouseout al contenedor
 animar.addEventListener('mouseout', function() {
    cajita.style.transform = 'rotate(0deg)'; // Restablecer el tamaño de la imagen
  });