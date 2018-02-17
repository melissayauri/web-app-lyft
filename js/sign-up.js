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


  /* función para validar el número de celular e inhabilitar el boton next*/
  $('#phone-number').keyup(function() {
    var restriction = /^[0-9]*$/;
    /* evalua que el número de celular es de 9 digitos y es un número*/
    if (($(this).val().length) === 9 && restriction.test($(this).val())) {
      /* se habilita el boton, removiendo el atributo desabilitado*/
      $('#next').removeAttr('disabled');
      /*  se añade la clase para habilitar el btn cambiandolo de color*/
      $('#next').addClass('btn-enabled');
    } else {
      $('#next').attr('disabled', 'disabled');
      $('#next').removeClass('btn-enabled');
    }
  });

  /* Función para generar el número random de tres dígitos*/
  var randomNumber = (function() {
    var code = ' ';
    var string = '1234567890';
    for (var i = 0; i < 3; i++) {
      code += string.charAt(Math.floor(Math.random() * string.length));
    }
    return code;
  });
  /* Evento para generar el primer código random en la vista sign up*/
  $('#next').click(function() {
    /* variable que guarda el primer código random*/
    var codeRandom = randomNumber();
    alert('lab-' + codeRandom);
    /* guardando el código random en el localstorage*/
    localStorage.setItem('random', codeRandom) ;
    /* redireccionando hacia el arhico verify*/
    window.location.href = '../views/verify-phone.html';
  });

  /* variable que guarda el segundo código random*/
  var newCode = randomNumber();
  /* evento que genera el segundo código random*/
  $('#button-resend').click(function() {
    alert('lab-' + newCode);
    console.log(newCode);
  });

  /* Validando si el ingreso del código es igual al que se brindo*/
  $('#input1').keyup(function() {
    /* obteniendo el primer código random*/
    var random1 = window.localStorage.getItem('random');
    /* console.log(random1);*/
    /* Convirtiendo a número los códigos random*/
    var numberRandom1 = parseInt(random1);
    var numberNewcode = parseInt(newCode);
    console.log(numberRandom1);
    console.log(numberNewcode);
    /* ingreso del código*/
    var verifyInput = $('#input1').val();
    /* convirtiendo a número*/
    var numberVerify = parseInt(verifyInput);
    console.log(verifyInput);
    /* Validando que el ingreso sea igual al código random brindado*/
    if (numberVerify === numberRandom1 || numberVerify === numberNewcode) {
      $('#next2').removeClass('disabled');
      $('#next2').addClass('btn-enabled');
      console.log('correcto');
    } else {
      console.log('incorrecto');
      $('#next2').addClass('disabled');
    }
  });
  $('#next2').click(function() {
    window.location.href = '../views/formul.html';
  });
});
