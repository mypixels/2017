$(document).ready(function() {

  // Trigger Mobile Nav
  $('.nav-toggle').click(function() {
    $('.navbar').toggleClass('is-open');
    $('.menu-icon').toggleClass('is-open');
  })

  // Offset Hero From Navbar
  var headerHeight = $('.main-header').outerHeight();

  $('.mobile-hero').css('margin-top', headerHeight);

  // Contact Form
  function _(id) { return document.getElementById(id);}

  function submitForm() {
    _("contact-submit").disabled = true;
    _("contact-status").innerHTML = 'please wait...';

    var formdata = new FormData();
    formdata.append("contact-name", _("contact-name").value);
    formdata.append("contact-email", _("contact-email").value);
    formdata.append("contact-message", _("contact-message").value);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "../php/contact_parser.php"); // Link to php might be wrong
    ajax.onreadystatechange = function() {
      if(ajax.readyState == 4 && ajax.status == 200) {
        if(ajax.responseText == "success") {
          _("contact-form").innerHTML = '<h2>Thanks ' +_("contact-name").value+', your message has been sent.</h2>';
        } else {
          _("status").innerHTML = ajax.responseText;
          _("contact-submit").disabled = false;
        }
      }
    }
    ajax.send(formdata);
  }
})
