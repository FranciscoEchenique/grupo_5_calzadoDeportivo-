
// Testeo

// window.addEventListener("load",function( ){

// const nombre = document.querySelector("#nombre");
// const descripcion = document.querySelector("#descripcion");



// const nombreError = document.querySelector("#nombreError");
// const descripcionErorr = document.querySelector("#descripcionError");


// const button = document.querySelector("#button");


// button.addEventListener("click", (event)=>{
//     event.preventDefault();
//     validateEmpy(nombre.value, nombre);
// });

// function validateEmpy(valueImput, divImput){
//     if(valueImput.length == 0){
//         showError(divImput);
//     }else{
//         hideError();
//     }
// }


// function showError(){
//     divImput.style.border = "1px solid red"
// }

// })



window.addEventListener("load",function( ){


    let formularioEdicion = document.querySelector("form.formulario-creacion-productos");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");


    formularioEdicion.addEventListener("submit", function(e){
        console.log("capturado")

        e.preventDefault();

        let errores = [];
        if(nombre.value == ""){
            errores.push("Ingresa un nombre");
        }
        if (descripcion.value == ""){
            errores.push("Ingresa una descripcion");
        }
        if (errores.length > 0){

            let ulErrores = document.querySelector("div.errores ul");
            for ( let i = 0; i < errores.length; i ++ ){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>" 
            }

        }

    })


})