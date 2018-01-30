$(document).ready(function() {

  // Trigger Mobile Nav
  $('.nav-toggle').click(function() {
    $('.navbar').toggleClass('nav-open');
    // $('.nav-toggle > i').toggleClass('is-open');
  })

  // Offset Hero From Navbar
  var headerHeight = $('.main-header').outerHeight();
  $('.main-hero').css('margin-top', headerHeight);

  // Smooth Scrolling
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top -headerHeight
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

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

  // Services Panels
  $('[id*=-repair]').hover(function() {
    $(this).toggleClass('active');
  })

  $('.phone-repair').click(function() {
    $('.tablet-repair-info, .computer-repair-info, .console-repair-info, .tv-repair-info, .board-repair-info, .security-check-info, .virus-removal-info, .data-recovery-info').removeClass('info-open');
    $('.tablet-repair > i, .computer-repair > i, .console-repair > i, .tv-repair > i, .board-repair > i, .security-check > i, .virus-removal > i, .data-recovery > i').removeClass('active');
    $('.phone-repair-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.tablet-repair').click(function() {
    $('.phone-repair-info, .computer-repair-info, .console-repair-info, .tv-repair-info, .board-repair-info, .security-check-info, .virus-removal-info, .data-recovery-info').removeClass('info-open');
    $('.phone-repair > i, .computer-repair > i, .console-repair > i, .tv-repair > i, .board-repair > i, .security-check > i, .virus-removal > i, .data-recovery > i').removeClass('active');
    $('.tablet-repair-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.computer-repair').click(function() {
    $('.phone-repair-info, .tablet-repair-info, .console-repair-info, .tv-repair-info, .board-repair-info, .security-check-info, .virus-removal-info, .data-recovery-info').removeClass('info-open');
    $('.phone-repair > i, .tablet-repair > i, .console-repair > i, .tv-repair > i, .board-repair > i, .security-check > i, .virus-removal > i, .data-recovery > i').removeClass('active');
    $('.computer-repair-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.console-repair').click(function() {
    $('.phone-repair-info, .tablet-repair-info, .computer-repair-info, .tv-repair-info, .board-repair-info, .security-check-info, .virus-removal-info, .data-recovery-info').removeClass('info-open');
    $('.phone-repair > i, .tablet-repair > i, .computer-repair > i, .tv-repair > i, .board-repair > i, .security-check > i, .virus-removal > i, .data-recovery > i').removeClass('active');
    $('.console-repair-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.tv-repair').click(function() {
    $('.phone-repair-info, .tablet-repair-info, .computer-repair-info, .console-repair-info, .board-repair-info, .security-check-info, .virus-removal-info, .data-recovery-info').removeClass('info-open');
    $('.phone-repair > i, .tablet-repair > i, .computer-repair > i, .console-repair > i, .board-repair > i, .security-check > i, .virus-removal > i, .data-recovery > i').removeClass('active');
    $('.tv-repair-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.board-repair').click(function() {
    $('.phone-repair-info, .tablet-repair-info, .computer-repair-info, .console-repair-info, .tv-repair-info, .security-check-info, .virus-removal-info, .data-recovery-info').removeClass('info-open');
    $('.phone-repair > i, .tablet-repair > i, .computer-repair > i, .console-repair > i, .tv-repair > i, .security-check > i, .virus-removal > i, .data-recovery > i').removeClass('active');
    $('.board-repair-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.security-check').click(function() {
    $('.phone-repair-info, .tablet-repair-info, .computer-repair-info, .console-repair-info, .tv-repair-info, .board-repair-info, .virus-removal-info, .data-recovery-info').removeClass('info-open');
    $('.phone-repair > i, .tablet-repair > i, .computer-repair > i, .console-repair > i, .tv-repair > i, .board-repair > i, .virus-removal > i, .data-recovery > i').removeClass('active');
    $('.security-check-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.virus-removal').click(function() {
    $('.phone-repair-info, .tablet-repair-info, .computer-repair-info, .console-repair-info, .tv-repair-info, .board-repair-info, .security-check-info, .data-recovery-info').removeClass('info-open');
    $('.phone-repair > i, .tablet-repair > i, .computer-repair > i, .console-repair > i, .tv-repair > i, .board-repair > i, .security-check > i, .data-recovery > i').removeClass('active');
    $('.virus-removal-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  $('.data-recovery').click(function() {
    $('.phone-repair-info, .tablet-repair-info, .computer-repair-info, .console-repair-info, .tv-repair-info, .board-repair-info, .security-check-info, .virus-removal-info').removeClass('info-open');
    $('.phone-repair > i, .tablet-repair > i, .computer-repair > i, .console-repair > i, .tv-repair > i, .board-repair > i, .security-check > i, .virus-removal > i').removeClass('active');
    $('.data-recovery-info').toggleClass('info-open');
    $('i', this).toggleClass('active');
  })

  // Hero Carousel
  $('#hero-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    swipeToSlide: true
  });

  // Reviews Carousel
  $('#review-carousel').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    swipeToSlide: true
  });

});
