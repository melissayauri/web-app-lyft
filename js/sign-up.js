/* numero aleatorios desde 1 al 9*/
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
  /* generando la alerta con un codigo*/
  $('#next').click(function() {
    alert('lab-' + numx + numy + numz);
    /* guardando el codigo para llamarlos en la otra vista*/
    localStorage.random1 = numx;
    localStorage.random2 = numy;
    localStorage.random3 = numz;
    /* redireccionando hacia el arhico verify*/
    window.location.href = '../views/verify-phone.html';
  });
});
