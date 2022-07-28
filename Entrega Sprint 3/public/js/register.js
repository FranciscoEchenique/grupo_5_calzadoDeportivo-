window.addEventListener("load", function (event) {

    let formularioRegistro = document.querySelector("form.formulario-registro");
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password")





    formularioRegistro.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("capturando formulario");
        let errores = [];
        if (nombre.value == "") {
            errores.push("Ingresa tu nombre");
        }
        if (apellido.value == "") {
            errores.push("Ingresa tu apellido");
        }
        if (email.value == "") {
            errores.push("Ingresa tu email");
        }
        if (password.value == "") {
            errores.push("Ingresa una contraseña");
        }
        if (errores.length > 0) {


            let ulErrores = document.querySelector("div.errores");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<h4>" + errores[i] + "</h4>"
            }

        }

    })


})