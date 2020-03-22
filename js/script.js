$(function () {
  var $nav = $('#gnav');
  var navHeight = $nav.innerHeight();

  $('a[href^="#"]').click(function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - navHeight;
    $('body,html').animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  $('#js-pageTop').click(function () {
    var speed = 300;
    $('body,html').animate({
      scrollTop: 0
    }, speed, "swing");
    return false;
  });

  $(window).on('load resize', function () {
    $('main').css('padding-top', navHeight);
  });
});
