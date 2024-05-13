function mostrarAlerta(){
alert("se cargo la imagen correctamente");
}


document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón para abrir el modal
    var btnAbrir = document.getElementById('btnAbrirModal');

    // Obtener el botón para cerrar el modal
    var btnCerrar = document.getElementById('btnCerrarModal');

    // Obtener el modal
    var modal = document.getElementById('miModal');

    // Función para abrir el modal
    function abrirModal() {
        modal.style.display = 'block'; // Mostrar el modal
    }

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = 'none'; // Ocultar el modal
    }

    // Asignar la función al evento onclick del botón de abrir modal
    btnAbrir.onclick = abrirModal;

    // Asignar la función al evento onclick del botón de cerrar modal
    btnCerrar.onclick = cerrarModal;
});

 function mensaje(){
   alert("Sus datos fueron enviados, gracias!");
}



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
 
   




   
   




   



  
 
  
  
