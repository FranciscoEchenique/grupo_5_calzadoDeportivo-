window.onload=function( ){
   
    let formularioRegistro = document.querySelector("form.formulario-registro");
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password")
    let passwordConfirm= document.querySelector("#passwordConfirm")
    
    formularioRegistro.addEventListener("submit", function(e){
           
            console.log("capturando formulario");
        let errores = {
            nombre:"",
            apellido:"",
            email:"",
            password:"",
            passwordConfirm:"",
         
        };
        if(nombre.value == ""){
            errores.nombre= "Ingresa tu nombre";
        }
        if(apellido.value == ""){
            errores.apellido= "Ingresa tu apellido";
        }            
        if(email.value == ""){
            errores.email="Ingresa tu email";
        }  
        if(password.value == ""){
        errores.password="Ingresa una contraseña";
        }
        if(passwordConfirm.value == "" ){
        errores.passwordConfirm="Reingresa tu contraseña";
          e.preventDefault();
        }



        
           

            let ulErrores = document.querySelector("div.errores-nombre");
                ulErrores.innerHTML = "<h4>" + errores.nombre + "</h4>" 
            let ulErrores1 = document.querySelector("div.errores-apellido");
                ulErrores1.innerHTML = "<h4>" + errores.apellido + "</h4>" 
            let ulErrores2 = document.querySelector("div.errores-email");
                ulErrores2.innerHTML = "<h4>" + errores.email + "</h4>" 
            let ulErrores3 = document.querySelector("div.errores-password");
                ulErrores3.innerHTML = "<h4>" + errores.password + "</h4>"
            let ulErrores4 = document.querySelector("div.errores-passwordConfirm");
                ulErrores4.innerHTML = "<h4>" + errores.passwordConfirm + "</h4>"


    })
} 

