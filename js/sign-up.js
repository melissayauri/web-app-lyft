/* numero aleatorios desde 1 al 9*/


$(document).ready(function() {
  /* evento para seleccionar la bandera según el país*/
  $('img').click(function() {
    $('#text').addClass('block');
    /* guardando la ruta de la imágenes de banderas*/
    var flags = $(this).attr('src');
    /* asignandole el atributo de la ruta*/
    $('#flag').attr('src', flags);
    /* obteniendo el atributo personalizado al código postal*/
    var postalCode = ($(this).data('postal-code'));
    /* asignando el código postal*/
    $('#postal-code').text(postalCode);
  });


  /* funcion para validar el numero de celular e inabilitar el boton next*/
  $('#phone-number').keyup(function() {
    /* evalua que el numero de celular es de 9 digitos*/
    if (($(this).val().length) === 9) {
      /* se habilita el boton, removiendo el atributo desabilitado*/
      $('#next').removeAttr('disabled');
      /*  se añade la clase para habilitar el btn cambiandolo de color*/
      $('#next').addClass('btn-enabled');
    } else {
      $('#next').attr('disabled', 'disabled');
      $('#next').removeClass('btn-enabled');
    }
  });

  /* generando la alerta con un codigo random*/
  /*
  var numx = Math.floor((Math.random() * 9) + 1);
  var numy = Math.floor((Math.random() * 9) + 1);
  var numz = Math.floor((Math.random() * 9) + 1);
*/
var randomNumber = (function() {
  var code = " ";

  var str = "1234567890";
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
  }
  return code;
});
  $('#next').click(function() {
    var codeRandom = randomNumber();
    alert('lab-' + codeRandom);
    /* guardando los codigos aleatorios para llamarlos en la otra vista*/

    /*
    localStorage.setItem('random1', numx) ;
    localStorage.setItem('random2', numy);
    localStorage.setItem('random3', numz);
*/localStorage.setItem('random', codeRandom) ;
    /* redireccionando hacia el arhico verify*/
    window.location.href = '../views/verify-phone.html';
  });

  var newCode = randomNumber();

  $('#button-resend').click(function() {
    alert('lab-' + newCode);
    console.log(newCode)
  });
  /*
  $('#input1').keyup(function() {

    var input = $(this).val();
      if (input.length == 3) {
        $('#next2').removeClass("disabled");
      /* se añade la clase para que cambie de color hablitando el btn*/
  /*  }
    else{
      $('#next2').addClass("disabled");
      /* se le remueve el color del btn habilitado*/


  $('#input1').keyup(function() {
    var random1 = window.localStorage.getItem('random');
    console.log(random1)
    var hh = parseInt(random1);
    var bumber = parseInt(newCode);
    console.log(hh)
  /*  window.location.href = '../views/formul.html';*/
  var verifyInput = $("#input1").val();
  var ggg = parseInt(verifyInput)
  console.log(verifyInput)
      /*  if ( verifyInput == newCode) {
          console.log(newCode)
alert('es correcto')
}*/
        if ( ggg  === hh || ggg=== bumber) {
            $('#next2').removeClass("disabled");

            alert('correcto')
        }
        else{
          console.log('incorrecto')
          $('#next2').addClass("disabled");

        }
  });
  $('#next2').click(function() {
    window.location.href = '../views/formul.html';
  });
});
