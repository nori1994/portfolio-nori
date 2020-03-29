function imgGuard(name) {
  //PCの右クリック対応
  $(name).on('contextmenu', function (e) {
    return false;
  });

  $(name).on('mousedown mouseup', function (e) {
    return false;
  });

  //スマホ長押し対応
  $(name).css({
    'pointer-events': 'none',
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-moz-touch-callout': 'none',
    '-moz-user-select': 'none',
    'touch-callout': 'none',
    'user-select': 'none'
  });
}

$(function () {
  imgGuard('.imgGuard');

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
