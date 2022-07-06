var imagenes = ["./images/c1.jpg","./images/c2.jpg","./images/c3.jpg","./images/c4.jpg"];
let cont = 0; 
window.addEventListener("load",function(){
  document.addEventListener("click", e =>{
    console.log("probando boton");
    let atras = document.querySelector(".atras.botones");
    let adelante = document.querySelector(".adelante.botones");
    let img = document.querySelector("#imagen");
    var tgt = e.target; 

    if( tgt == atras){
        if (cont > 0 ){
            
            img.src = imagenes [cont -1];
            cont --;
          }else{
            img.src = imagenes [imagenes.length -1];
            cont = imagenes.length - 1;
          } 
        }else if (tgt == adelante){
          if (cont  < imagenes.length -1 ){
           img.src = imagenes [cont + 1];
           cont ++;
          }else{
           img.src = imagenes [0];
           cont = 0;
          }
        }
    });

});
