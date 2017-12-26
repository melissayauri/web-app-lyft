$(document).ready(function() {
  /*vista splash por 4 segundos*/
var loadImg =  $('.splash').delay(1000).fadeOut("slow");

/*
$("index.html").ready(loadImg);*/
/*
var cantDigCelular = function(){
var cuadradoNegro = $("#cuadrado-negro");
var longitud = $("#input-celular").val().length;
console.log("longitud ");
if (longitud == 9) {
  $("#obtener-codigo").attr("href", "comprobacion-codigo.html");
} else {
  cuadradoNegro.text("El celular debe tener 9 dígitos");
  cuadradoNegro.removeClass("ocultar");
  setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
  $("#obtener-codigo").removeAttr("href");
}
}
*/

	$("#input-celular").focus();

	$("#obtener-codigo").on("click",function(){
    var cuadradoNegro = $("#cuadrado-negro");
    var longitud = $("#input-celular").val().length;
    console.log("longitud ");
    if (longitud == 9) {
      $("#obtener-codigo").attr("href", "comprobacion-codigo.html");
    } else {
      cuadradoNegro.text("El celular debe tener 9 dígitos");
      cuadradoNegro.removeClass("ocultar");
      setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
      $("#obtener-codigo").removeAttr("href");
    }

  })
});
/*$(document).ready(cargar);*/
