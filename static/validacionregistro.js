function validarDatos(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    let mail = document.getElementById("mail").value.trim()                   
    let nuevousuario = document.getElementById("nuevo-usuario").value.trim()  
    let contraseña = document.getElementById("contraseña").value.trim()
    let error = document.getElementById("campos")

   
    if(mail === "" || nuevousuario === ""){
        error.textContent = "Por favor complete todos los campos."
        error.style.color = "red"
        return false
    }    

   
    if (!/^\S+@\S+\.\S+$/.test(mail)) {
        error.textContent = "Por favor ingrese un email válido.";
        error.style.color = "blue";
        return false;
    } 
    if(!/^[a-zA-Z]+$/.test(nuevousuario)){
        error.textContent = "Por favor complete un nombre válido."
        error.style.color = "blue"
        return false
    }
    // Verificar si la contraseña contiene solo 8 dígitos numéricos
    // contraseña = "12345678"
    if(contraseña.length !== 8){
        error.textContent = "Por favor ingrese una contraseña de numeros correctamente."
        error.style.color = "red"
        return false
    }
    
    // Verificar contraseña no es un número
    if(isNaN(contraseña)){
        error.textContent = "Por favor ingrese correctamente los números."
        error.style.color = "red"
        return false
    }
    
     
 // Si todas las validaciones pasan, mostramos un alert
 alert("¡Todos los datos son enviados correctamente!");
 // Aquí puedes agregar cualquier otra acción que necesites después de enviar los datos

 event.target.submit();
  
}

    