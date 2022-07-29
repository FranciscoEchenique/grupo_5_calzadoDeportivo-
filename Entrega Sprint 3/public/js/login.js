window.onload =function(){
   
    let formularioLogin = document.querySelector("form.formulario");
    let email = document.querySelector("#usuario");
    let contraseña = document.querySelector("#clave");

    
    formularioLogin.addEventListener("submit", function(e){
        
        console.log("capturado")
        let errores = {
            email:"",
            password:"",
        }
      
        if(email.value == ""){
            errores.email= "Ingresa tu email";
        }
        if (contraseña.value == ""){
            errores.password ="Ingresa tu contraseña";
            e.preventDefault();
        }
       
            let ulErrores = document.querySelector("div.errores-email");
                ulErrores.innerHTML = "<h4>" + errores.email + "</h4>" 
            let ulErrores2 = document.querySelector("div.errores-password");
                ulErrores2.innerHTML = "<h4>" + errores.password + "</h4>"    
       
 
    })
 
} 