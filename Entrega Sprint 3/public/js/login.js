<<<<<<< HEAD
window.addEventListener("load",function(event){
=======
window.addEventListener("load",function( ){
>>>>>>> 466a555d5bf76f10e4930c71797b2188e1e4f077
   
    let formularioLogin = document.querySelector("form.formulario");
    let email = document.querySelector("#usuario");
    let contraseña = document.querySelector("#clave");

    
    formularioLogin.addEventListener("submit", function(e){
<<<<<<< HEAD
=======
        console.log("capturado")
>>>>>>> 466a555d5bf76f10e4930c71797b2188e1e4f077
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