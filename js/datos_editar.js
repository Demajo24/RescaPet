let cadena = location.search;


let datos = new URLSearchParams(cadena);


let resultado = {};


for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
    resultado[email] = valor;
    resultado[informacion] = valor
    //resultado[imagen] = valor
}






document.getElementById("id").value = resultado["id"]
document.getElementById("nombre").value = resultado["nombre"]
document.getElementById("email").value = resultado["email"]
document.getElementById("informacion").value = resultado["informacion"]
//document.getElementById("imagen").value = resultado["imagen"]