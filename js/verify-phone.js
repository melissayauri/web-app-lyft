$(document).ready(function() {
  /* validación con el código de la vista sign-up*/
  /* cada entrada del codigo comienzan en estado falso*/
  var $stateRandom1 = false;
  var $stateRandom2 = false;
  var $stateRandom3 = false;
  /* validando la primera entrada de codigo*/

  $('#input1').keyup(function() {
    /* obteniendo el primer n° aleatorio de la pestaña anterior*/
    var $rand1 = localStorage.getItem('random1');
    /* evaluando al primer código*/
    if ($(this).val() === $rand1) {
      console.log('correct number1');
      /* si el valor coincide con el de la vista anterior es verdadero*/
      $stateRandom1 = true;
    } else {
      $stateRandom1 = false;
    }
    /* evaluando todos los estados de los código para habilitar el btn next*/
    if ($stateRandom1 === true && $stateRandom2 === true && $stateRandom3 === true) {
      /* el btn se encuentra desabilitado y se quita ese atributo*/
      $('#next2').removeAttr('disabled');
      /* se añade la clase para que cambie de color hablitando el btn*/
      $('#next2').addClass('btn-enabled');
    } else {
      /* si en caso los estados no son verdaderos el btn permanece desabilitado*/
      $('#next2').attr('disabled', 'disabled');
      /* se le remueve el color del btn habilitado*/
      $('#next2').removeClass('btn-enabled');
    }
  });

  /* evaluando al segundo código*/
  $('#input2').keyup(function() {
    /* obteniendo el segundo n° aleatorio de la pestaña anterior*/
    var $rand2 = localStorage.getItem('random2');
    if ($(this).val() === $rand2) {
      /* si el valor coincide con el de la vista anterior es verdadero*/
      console.log('correct number2');
      $stateRandom2 = true;
    } else {
      $stateRandom2 = false;
    }
    /* evaluando todos los estados de los código para habilitar el btn next*/
    if ($stateRandom1 === true && $stateRandom2 === true && $stateRandom3 === true) {
      /* el btn se encuentra desabilitado y se quita ese atributo*/
      $('#next2').removeAttr('disabled');
      /* se añade la clase para que cambie de color hablitando el btn*/
      $('#next2').addClass('btn-enabled');
    } else {
      /* si en caso los estados no son verdaderos el btn permanece desabilitado*/
      $('#next2').attr('disabled', 'disabled');
      /* se le remueve el color del btn habilitado*/
      $('#next2').removeClass('btn-enabled');
    }
  });
  /* evaluando al tercer código*/
  $('#input3').keyup(function() {
    /* obteniendo el tercer n° aleatorio de la pestaña anterior*/
    var $rand3 = localStorage.getItem('random3');
    if ($(this).val() === $rand3) {
      /* si el valor coincide con el de la vista anterior es verdadero*/
      console.log('correct number3');
      $stateRandom3 = true;
    } else {
      $stateRandom3 = false;
    }
    if ($stateRandom1 === true && $stateRandom2 === true && $stateRandom3 === true) {
      /* el btn se encuentra desabilitado y se quita ese atributo*/
      $('#next2').removeAttr('disabled');
      /* se añade la clase para que cambie de color hablitando el btn*/
      $('#next2').addClass('btn-enabled');
    } else {
      /* si en caso los estados no son verdaderos el btn permanece desabilitado*/
      $('#next2').attr('disabled', 'disabled');
      /* se le remueve el color del btn habilitado*/
      $('#next2').removeClass('btn-enabled');
    }
  });

  /* analizando el nuevo codigo generado por en tbn resent*/
  /* otra forma para le n° aleatorio-funcion para el numero aleatorio del 0 al 9*/
  function numberRandom() {
    var $firstnum = (Math.floor(Math.random() * 10)).toString();
    console.log($firstnum);
    var $secondnum = (Math.floor(Math.random() * 10)).toString();
    console.log($secondnum);
    var $thirdnum = (Math.floor(Math.random() * 10)).toString() ;
    console.log($thirdnum);
    var $result = $firstnum + $secondnum + $thirdnum;
    console.log($result);
    return $result;
  };
  /* función para habilitar el botón next*/
  $('#button-resend').click(function() {
    /* llamando a la funcion de n° aleatorios*/
    var $newCode = numberRandom();
    /* incorporando el alert*/
    alert('LAB - ' + $newCode);
    /* desglosando cada item del nuevo codigo*/
    var $num1 = ($newCode[0]).toString();
    var $num2 = ($newCode[1]).toString();
    var $num3 = ($newCode[2]).toString();
    /* variables para definir el estado de cada código*/
    var $stateNum1 = false;
    var $stateNum2 = false;
    var $stateNum3 = false;
    /* se procede a evaluar solo el codigo que genera el boton resent*/
    /* evaluando cada entrada de codigo si es igual al alert*/
    $('#input1').keyup(function() {
      /* evaluando al primer item del código*/
      if ($(this).val() === $num1) {
        console.log('correct number1');
        $stateNum1 = true;
      } else {
        $stateNum1 = false;
      }
      /* evaluando al primer item del código para habilitar el btn next*/
      if ($stateNum1 === true && $stateNum2 === true && $stateNum3 === true) {
        $('#next2').removeAttr('disabled');
        $('#next2').addClass('btn-enabled');
      } else {
        $('#next2').attr('disabled', 'disabled');
        $('#next2').removeClass('btn-enabled');
      }
    });
    /* evaluando al segundo item del código*/
    $('#input2').keyup(function() {
      if ($(this).val() === $num2) {
        console.log('correct number2');
        $stateNum2 = true;
      } else {
        $stateNum2 = false;
      }
      /* evaluando al segundo item del código para habilitar el btn next*/
      if ($stateNum1 === true && $stateNum2 === true && $stateNum3 === true) {
        $('#next2').removeAttr('disabled');
        $('#next2').addClass('btn-enabled');
      } else {
        $('#next2').attr('disabled', 'disabled');
        $('#next2').removeClass('btn-enabled');
      }
    });
    /* evaluando al tercer item del código*/
    $('#input3').keyup(function() {
      if ($(this).val() === $num3) {
        console.log('correct number3');
        $stateNum3 = true;
      } else {
        $stateNum3 = false;
      }
      if ($stateNum1 === true && $stateNum2 === true && $stateNum3 === true) {
        $('#next2').removeAttr('disabled');
        $('#next2').addClass('btn-enabled');
      } else {
        $('#next2').attr('disabled', 'disabled');
        $('#next2').removeClass('btn-enabled');
      }
    });
  });
  /* redireccionamiento a la vista formulario*/
  $('#next2').click(function() {
    window.location.href = '../views/formul.html';
  });
});
