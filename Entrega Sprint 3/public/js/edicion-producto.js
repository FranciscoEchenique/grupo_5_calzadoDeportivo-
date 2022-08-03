
// Testeo 1

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








// ----------------------------------------------------------------------------------




// Testeo 2

// window.addEventListener("load",function( ){


//     let formularioEdicion = document.querySelector("form.formulario-creacion-productos");
//     const nombre = document.querySelector("#nombre");
//     const descripcion = document.querySelector("#descripcion");


//     formularioEdicion.addEventListener("submit", function(e){
//         console.log("capturado")

//         e.preventDefault();

//         let errores = [];
//         if(nombre.value == ""){
//             errores.push("Ingresa un nombre");
//         }
//         if (descripcion.value == ""){
//             errores.push("Ingresa una descripcion");
//         }
//         if (errores.length > 0){

//             let ulErrores = document.querySelector("div.errores ul");
//             for ( let i = 0; i < errores.length; i ++ ){
//                 ulErrores.innerHTML += "<li>" + errores[i] + "</li>" 
//             }

//         }

//     })


// })









// ------------------------------------------------------------------------------------






// Testeo 3


window.onload = function () {

    let formularioEdicion = document.querySelector("form");
    let nombre = document.querySelector("#nombre");
    let descripcion = document.querySelector("#descripcion");


    formularioEdicion.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("capturado")
        let errores = {
            nombre: "",
            descripcion: "",
        }

        if (nombre.value == "") {
            errores.nombre = "Ingresa un nombre";
        }
        if (descripcion.value == "") {
            errores.descripcion = "Ingresa una descripcion al producto";
        }
        if(errores.nombre == "" && errores.descripcion == ""){
            formularioEdicion.submit();
        }

        let ulErrores = document.querySelector("div.errores-nombre");
        ulErrores.innerHTML = "<h4>" + errores.nombre + "</h4>"
        let ulErrores2 = document.querySelector("div.errores-descripcion");
        ulErrores2.innerHTML = "<h4>" + errores.descripcion + "</h4>"


    })

} 





// // Testeo 4




// const nombre = document.getElementById("nombre")
// const descripcion = document.getElementById("descripcion")
// const form = document.getElementById("form")
// const parrafo = document.getElementById("warnings")

// form.addEventListener("submit", e=>{
//     e.preventDefault()
//     let warnings = ""
//     let entrar = false
//     parrafo.innerHTML = ""
//     if(nombre.value.length <5){
//         warnings += `El nombre no es valido <br>`
//         entrar = true
//     }
//     if(descripcion.value.length < 20){
//         warnings += `La descripcion no es valida <br>`
//         entrar = true
//     }

//     if(entrar){
//         parrafo.innerHTML = warnings
//     }else{
//         parrafo.innerHTML = "Enviado"
//     }
// })