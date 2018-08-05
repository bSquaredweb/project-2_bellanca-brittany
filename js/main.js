// Call the Drawer
$(document).ready(function() {
  $('.drawer').drawer();
});


$(function() {
  $('.input').keyup(function() {

    var empty = false;
    $('.input').each(function() {
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#submit').hasClass('.button--disabled');
    } else {
      $('#submit').removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  });
}());
