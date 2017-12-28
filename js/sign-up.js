/*numero aleatorios*/
var numx = Math.floor((Math.random() * 9) + 1);
var numy = Math.floor((Math.random() * 9) + 1);
var numz = Math.floor((Math.random() * 9) + 1);
/* #flag-venezuela,#flag-estados-unidos'*/
$(document).ready(function() {
  /* funcion para hacer el cambio de bandera*/
  $('#flag-mexico,#flag-venezuela,#flag-estados-unidos').click(function() {
    var location = $(this).attr('src');
    /* se le asigna la nueva ubicacion de las banderas*/
    $('#flag').attr('src', location);
  });


  /* funcion para validar el numero de celular e inabilitar el boton next*/
  $('#number-phone').keyup(function() {
    if (($(this).val().length) === 9) {
      $('#next').removeAttr('disabled');
      $('#next').addClass('btn-enabled');
    } else {
      $('#next').attr('disabled', 'disabled');
      $('#next').removeClass('btn-enabled');
    }
  });
  /* generando la alerta con un codigo*/
  $('#next').click(function() {
    alert('lab-' + numx + numy + numz);
    /* redireccionando hacia el arhico verify*/
    window.location.href = '../views/verify-phone.html';
  });
});
