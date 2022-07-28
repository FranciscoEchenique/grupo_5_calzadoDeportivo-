window.addEventListener("load",function( ){

    let formularioLogin = document.querySelector("form.formulario");
    let email = document.querySelector("#usuario");
    let contraseña = document.querySelector("#clave");

    
    formularioLogin.addEventListener("submit", function(e){
        console.log("capturado")
        let errores = [];
        if(email.value == ""){
            errores.push("Ingresa tu email");
        }
        if (contraseña.value == ""){
            errores.push("Ingresa tu contraseña");
        }
        if (errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores");
            for ( let i = 0; i < errores.length; i ++ ){
                ulErrores.innerHTML += "<h4>" + errores[i] + "</h4>" 
            }

        }

    })


})