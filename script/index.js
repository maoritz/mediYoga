$(document).ready(function () {
  // For the sticky nav-bar
  $(".js--programs-section").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $('nav').css('padding-top','0')
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "22%" }
  );

  // For the mobile menu
  $('.js--nav-icon').click(function(){
      const nav = $('.js--main-nav');
      nav.slideToggle(200)
  });

})
