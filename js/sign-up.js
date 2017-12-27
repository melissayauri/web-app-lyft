$(document).ready(function() {
  /* funcion para hacer el cambio de bandera*/
  $('#flag-mexico,#flag-venezuela,#flag-estados-unidos').click(function() {
    var locationFlag = $(this).attr('src');
    /* se le asigna la nueva ubicacion de las banderas*/
    $('#flag').attr('src', locationFlag);
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
  /*generando la alerta con un codigo*/
  $('#next').click(function() {
    var x = Math.floor((Math.random() * 10) + 1);
    var y = Math.floor((Math.random() * 10) + 2);
    var z = Math.floor((Math.random() * 10) + 3);
    alert('lab-'+x+y+z);
    $("#next").attr("href", "../views/comprobacion-codigo.html");
});
});
