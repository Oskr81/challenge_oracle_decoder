let ocultarBox = document.getElementById("boton1");
ocultarBox.addEventListener("click", ocultarImagen);

let isVisible = true;
function ocultarImagen() {
  var div = document.getElementById('ocultar');
  if(isVisible){
    div.style.display = "none";
    isVisible = false;
 
  }
}


let encriptarMensaje = document.getElementById("boton1").addEventListener("click", encriptar);
function encriptar(){
  var mensaje_original = document.getElementById("mensaje").value; 
  mensaje_original = mensaje_original.toLowerCase();
  mensaje_original = mensaje_original.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  mensaje_original = mensaje_original.replace(/e/g, "enter"); 
  mensaje_original = mensaje_original.replace(/i/g, "imes");    
  mensaje_original = mensaje_original.replace(/a/g, "ai");
  mensaje_original = mensaje_original.replace(/o/g, "ober");  
  mensaje_original = mensaje_original.replace(/u/g, "ufar");  

  document.getElementsByClassName("mensaje-encriptado")[0].value = mensaje_original;
     
}


let copyBtn = document.querySelector("#copiar");

copyBtn.addEventListener("click", function(){ 
  let pasteText = document.querySelector("#mensaje");
  let copyText = document.querySelector(".mensaje-encriptado");
  pasteText.value = copyText.value;
  alert("El texto se ha copiado de manera exitosa!");  
});


let boton2 = document.getElementById("boton2").addEventListener("click",desencriptar);
function desencriptar(){
  console.log("Desenciptando....")
  var mensaje_desifrado = document.getElementsByClassName("mensaje-encriptado")[0].value;
  mensaje_desifrado = mensaje_desifrado.replace(/enter/g, "e"); 
  mensaje_desifrado = mensaje_desifrado.replace(/imes/g, "i");    
  mensaje_desifrado = mensaje_desifrado.replace(/ai/g, "a");
  mensaje_desifrado = mensaje_desifrado.replace(/ober/g, "o");  
  mensaje_desifrado = mensaje_desifrado.replace(/ufar/g, "u");  
  document.getElementById("mensaje").value = mensaje_desifrado;
}
