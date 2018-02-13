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
  var numx = Math.floor((Math.random() * 9) + 1);
  var numy = Math.floor((Math.random() * 9) + 1);
  var numz = Math.floor((Math.random() * 9) + 1);

  $('#next').click(function() {
    alert('lab-' + numx + numy + numz);
    /* guardando los codigos aleatorios para llamarlos en la otra vista*/
    localStorage.setItem('random1', numx) ;
    localStorage.setItem('random2', numy);
    localStorage.setItem('random3', numz);

    /* redireccionando hacia el arhico verify*/
    window.location.href = '../views/verify-phone.html';
  });
});
