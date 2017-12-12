$(document).ready(function() {
  $('.nav-toggle').click(function() {
    $('.navbar').toggleClass('is-open');
    $('.menu-icon').toggleClass('is-open');
  })

  var headerHeight = $('.main-header').outerHeight();

  $('.mobile-hero').css('margin-top', headerHeight);
})
