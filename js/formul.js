
$(document).ready(function() {
  alert('djdj')
  // manda un alert si se ingresa un numero
  $('#first-name').on('input', function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingrese números');
      $(this).val('');
    }
  });

  $('#last-name').on('input', function() {
    if ($(this).val().match(/[1-9]/)) {
      alert('No ingrese números');

      $(this).val('');
    }
  });
  // valida si el correo es valido cuando ya no esta en focus
  $('#email').focusout(function() {
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    var res = PATTERNEMAIL.test($(this).val());
    if (res === false) {
      alert('Ingrese correo válido');
      $(this).val('');
    }
  });

  // el boton se habilita si todos los campos estan llenos y redirecciona a la vista end
  $('#submit').click(function(event) {
    if ($('#check').prop('checked') && $('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      event.preventDefault();
      window.location.href = '../views/end.html';
    } else {
      alert('Rellene todos los campos');
      event.preventDefault();
    }
  });
});
