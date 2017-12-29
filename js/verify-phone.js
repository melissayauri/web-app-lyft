$(document).ready(function() {
  /* funcion para el numero aleatorio del 0 al 9*/
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
    var $num1 = (parseInt($newCode[0])).toString();
    var $num2 = (parseInt($newCode[1])).toString();
    var $num3 = (parseInt($newCode[2])).toString();
    /* variables para definir el estado de cada código*/
    var $stateNum1 = false;
    var $stateNum2 = false;
    var $stateNum3 = false;
    /* evaluando cada entrada de codigo si es igual al alert*/
    $('#cod1').keyup(function() {
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
    $('#cod2').keyup(function() {
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
    $('#cod3').keyup(function() {
      if ($(this).val() === $num3) {
        console.log('sii3');
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
