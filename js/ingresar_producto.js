function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let email_ingresado = document.getElementById("email").value 
    let informacion_ingresada = document.getElementById("informacion").value 
    // let imagen_ingresada = document.getElementById("imagen").value 

    console.log(nombre_ingresado,email_ingresado,informacion_ingresada);
    // Se arma el objeto de js 
    let datos = {
        nombre:nombre_ingresado,
        email:email_ingresado,
        informacion:informacion_ingresada,
        // imagen:imagen_ingresada
    }
    console.log(datos);
    
    let url = "https://demajo.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "index.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}