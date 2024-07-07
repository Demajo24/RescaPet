function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let email_ingresado = document.getElementById("email").value 
    let informacion_ingresada = document.getElementById("informacion").value 
    //let imagen_ingresada = document.getElementById("imagen").value 

    let datos = {
        nombre: nombre_ingresado,
        email: email_ingresado,
        informacion: informacion_ingresada,
        //imagen: imagen_ingresada
    }

    console.log(datos);

    let url = "https://demajo.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
   
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

           window.location.href = "../tabla_perdidos.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}