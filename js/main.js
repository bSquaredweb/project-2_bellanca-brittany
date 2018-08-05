// Call the Drawer
$(document).ready(function() {
  $('.drawer').drawer();
});

// Removed Disabled Attribute & Add button--primary when form is completed
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

// Modal JS
var modal = document.getElementById('modal');
    button = document.getElementById("modal__button--mobile");
    buttonDesktop = document.getElementById("modal__button--desktop");
    icon = document.getElementsByClassName("modal__close")[0];

// Listen for a click on either the button or link to open the modal
button.addEventListener('click', function() {
  modal.style.display = "block";
});

buttonDesktop.addEventListener('click', function() {
  modal.style.display = "block";
});

// Listen for a click on icon to close the modal
icon.addEventListener('click', function() {
  modal.style.display = "none";
});

// Click outside of modal = modal will close
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
