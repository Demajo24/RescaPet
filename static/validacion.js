function validarDatos(){
  
    let nombre = document.getElementById("usuario").value.trim()                   
  
    let contraseña = document.getElementById("contraseña").value.trim()
    let error = document.getElementById("campos")

  
    if(nombre === "" || contraseña=== ""){
        error.textContent = "Por favor complete todos los campos."
        error.style.color = "red"
        return false
    }    


    if(!/^[a-zA-Z]+$/.test(nombre)){
        error.textContent = "Por favor complete un nombre válido."
        error.style.color = "blue"
        return false
    }
    
    // Verificar si la contraseña contiene solo 8 dígitos numéricos
    // contraseña = "12345678"
    if(direccion.length !== 8){
        error.textContent = "Por favor ingrese una contraseña de numeros correctamente."
        error.style.color = "red"
        return false
    }
    
    // Verificar contraseña no es un número
    if(isNaN(direccion)){
        error.textContent = "Por favor ingrese correctamente los números."
        error.style.color = "red"
        return false
    }
    
    // Si todas las validaciones son exitosas, informar
    alert("Datos validados.")
    return true
  
}

    