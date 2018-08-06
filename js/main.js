// Call the Drawer
$(document).ready(function() {
  $('.drawer').drawer();
});

// Activate scrollreveal on mobile
ScrollReveal().reveal('.interactive-element__text');

// Removes Disabled Attribute & Add button--primary when form is completed
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

  // When the reset button is clicked, the submit button becomes disabled again
  $('#reset').on('click', function() {
    $('#submit').attr('disabled', true).addClass('button--disabled').removeClass('button--primary');
  });
}());

// Modal JS
var modal = document.getElementById('modal');
    button = document.getElementById("modal__button--mobile");
    buttonDesktop = document.getElementById("modal__button--desktop");
    buttonFooter = document.getElementById("modal__button--footer");
    icon = document.getElementsByClassName("modal__close")[0];

// Listen for a click on either the button or link to open the modal
button.addEventListener('click', function() {
  modal.style.display = "block";
});

buttonDesktop.addEventListener('click', function() {
  modal.style.display = "block";
});

// The page will not scroll to the top when the footer modal link is clicked
buttonFooter.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = "block";
});

// Listen for a click on icon to close the modal
icon.addEventListener('click', function() {
  modal.style.display = "none";
});

// Click outside of modal = modal will close
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
