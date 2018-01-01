$(document).ready(function() {
  /* validacion para la entrada del nombre y apellido*/
  $('#first-name, #last-name').keyup(function() {
    /* obteniendo el valor*/
    var $inputName = $(this).val();
    /* expresion para numeros*/
    var $expresion1 = /[1-9]/;
    /*  se valida para que solo se ingrese letras y no numeros*/
    if ($inputName.match($expresion1)) {
      alert('Solo se ingresa letras');
      $(this).val('');
    }
  });
  /* validando la entrada del correo */
  $('#email').focusout(function() {
    var $inputEmail = $(this).val();
    /* expresión para validar el @ del correo*/
    var $expresion2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    /* si es incorrecto, se manda un mensaje de alerta*/
    if ($expresion2.test($inputEmail) === false) {
      alert('Ingresar un correo válido');
      /* vaciando la entrada*/
      $(this).val('');
    }
  });
  /* habilitando el btn next */
  $('#check').click(function() {
    /* validnado que todos lo campos esten correctos*/
    if ($('#check').prop('checked') && $('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      console.log('campos correctos y check seleccionado');
      $('#next-final').removeAttr('disabled');
      /* se añade la clase para que cambie de color hablitando el btn*/
      $('#next-final').addClass('btn-enabled');
    }
  });

  /* redireccionamiento a la vista end, previamente validando campos*/
  $('#next-final').click(function() {
    /* var $name = $('#first-name').val();
    var $lastName = $('#last-name').val() ;
    var mail =  $('#email').val();*/
    /* se ejecuta si se cumple todos los campos*/
    if ($('#check').prop('checked') && $('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      event.preventDefault();
      /* se dirige a la vista end*/
      window.location.href = '../views/end.html';
    } else {
      /* alerta para rellenar todos los campos*/
      alert('Todos los campos son obligatorios');
      event.preventDefault();
    }
  });
});
