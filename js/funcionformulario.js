//**........Formulario ..........*/

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var asunto = document.getElementById("asunto");
var email = document.getElementById("email");
var error = document.getElementById("error");
error.style.color = "red"




function Enviarformulario() {
    console.log("Enviando formulario");

    var mensajeerror = [];
    if (nombre.value === null || nombre.value === "") {
        mensajeerror.push("Ingresa tu Nombre");
    }
    if (apellido.value === null || apellido.value === "") {
        mensajeerror.push("Ingresa tu Apellido");
    }
    if (asunto.value === null || asunto.value === "") {
        mensajeerror.push("Ingresa tu Asunto");
    }
    if (email.value === null || email.value === "") {
        mensajeerror.push("Ingresa tu Email");
    }

    error.innerHTML= mensajeerror.join(",");
    return false;
}


