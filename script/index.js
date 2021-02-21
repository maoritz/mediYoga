$(document).ready(function () {
  // For the sticky nav-bar
  $(".js--programs-section").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $('nav').css('padding-top','0')
      } else {
        $('nav').css('padding-top','3rem')
        $("nav").removeClass("sticky");
      }
    },
    { offset: "22%" }
  );

  // For the mobile menu
  $('.js--nav-icon').click(function(){
      const nav = $('.js--main-nav');
      const icon = $('.mobile-nav-icon')
      if (icon.attr('name') == 'menu'){
        nav.slideToggle(200)
        icon.attr('name','close')
      }else{
        nav.slideToggle(200)
        icon.attr('name','menu')
      }
 
  });

  // Scroll on buttons
  $(".js--scroll-to-header").click(function(){
    $('html,body').animate({scrollTop:  $('.js--header').offset().top -100},1000)
  })

  $(".js--scroll-to-about-us").click(function(){
    $('html,body').animate({scrollTop:  $('.js--about-us-section').offset().top -100},1000)
  })
  
  $(".js--scroll-to-programs").click(function(){
    $('html,body').animate({scrollTop:  $('.js--programs-section ').offset().top -100},1000)
  })

  $(".js--scroll-to-schedule").click(function(){
    $('html,body').animate({scrollTop:  $('.js--Schedule-section').offset().top -100},1000)
  })
  
  $(".js--scroll-to-team").click(function(){
    $('html,body').animate({scrollTop:  $('.js--team-section').offset().top -100},1000)
  })

  $(".js--scroll-to-pricing").click(function(){
    $('html,body').animate({scrollTop:  $('.js--pricing-section').offset().top -100},1000)
  })


  // Animations on scroll
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  },{
    offset: '60%'
  })

  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
  },{
    offset: '70%'
  })

  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  },{
    offset: '60%'
  })

  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animate__animated animate__headShake');
  },{
    offset: '70%'
  })

  $('.js--wp-5').waypoint(function(direction){
    $('.js--wp-5').addClass('animate__animated animate__fadeIn');
  },{
    offset: '65%'
  })

})
