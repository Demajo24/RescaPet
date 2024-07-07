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




 
   




   
   




   



  
 
  
  
