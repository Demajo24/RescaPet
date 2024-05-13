const entradaUsuario = document.getElementById("nuevo-usuario")

const mensajeBienvenida = document.getElementById("mensaje-bienvenida")

const botonGuardar = document.getElementById("boton-guardar")

const usuarioGuardado = localStorage.getItem("nuevo-usuario")

if(usuarioGuardado){
    mensajeBienvenida.textContent = `Hola ${usuarioGuardado} ¿cómo estás?`
}

botonGuardar.addEventListener('click', () =>{

    const usuario = entradaUsuario.value

    if (usuario !== "") {
        localStorage.setItem("usuario", usuario)

        mensajeBienvenida.textContent = `Bienvenido/a ${usuario}`
    }

    else{
        alert("Lo sentimos tu navegador no soporta Web Storage")

     }
});

