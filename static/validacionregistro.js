function validarDatos(){

    let mail = document.getElementById("mail").value.trim()                   
    let nuevousuario = document.getElementById("nuevo-usuario").value.trim()  
    let contraseña = document.getElementById("contraseña").value.trim()
    let error = document.getElementById("campos")

   
    if(mail === "" || nuevousuario === ""){
        error.textContent = "Por favor complete todos los campos."
        error.style.color = "red"
        return false
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
    
    // Si todas las validaciones son exitosas, informar
    alert("Datos validados.")
    return true
  
}

    