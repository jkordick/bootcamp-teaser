$(document).ready(function () {
  var scroll = "uninitialized";
  $("#navbar").hide();

  $(window).scroll(function () {
    scroll = $(window).scrollTop();

    if (scroll > $("#section2").offset().top) {
      $("#navbar").show();
    }

    if (scroll < $("#section2").offset().top) {
      $("#navbar").hide();
    }
  });
});
