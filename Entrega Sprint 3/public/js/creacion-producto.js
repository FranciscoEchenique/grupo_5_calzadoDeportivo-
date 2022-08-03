

// const nombre = document.querySelector("#nombre");
// const precio = document.querySelector("#precio");
// const imagen = document.querySelector("#imagenProducto");
// const descripcion = document.querySelector("#descripcion");



// const nombreError = document.querySelector("#nombreError");
// const precioError = document.querySelector("#precioError");
// const imagenError = document.querySelector("#imagenProductoError");
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



window.addEventListener("load", function(){
    let formularioCreacion = document.querySelector("form.formulario-creacion-productos")

    formularioCreacion.addEventListener("submit", function(e){
        e.preventDefault();

        let campoNombre =  document.querySelector("input.name");
        
        if (campoNombre.value == ""){
            alert("El campo debe estar completo");
        }
    })
})