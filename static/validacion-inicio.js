function validarDatos(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const consulta = document.getElementById("informacion").value.trim();
    const error = document.getElementById("campos");

    if (nombre === "" || email === "" || informacion === "") {
        error.textContent = "Por favor complete todos los campos.";
        error.style.color = "red";
        return false;
    }

    if (!/^[a-zA-Z]+$/.test(nombre)) {
        error.textContent = "Por favor ingrese un nombre válido (solo letras).";
        error.style.color = "blue";
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        error.textContent = "Por favor ingrese un email válido.";
        error.style.color = "blue";
        return false;
    }

    // Si todas las validaciones pasan, mostramos un alert
    alert("¡Todos los datos son enviados correctamente!");
    // Aquí puedes agregar cualquier otra acción que necesites después de enviar los datos

    event.target.submit();
}

    
