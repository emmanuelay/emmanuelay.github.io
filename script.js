$( document ).ready(function() {

  $(window).on('scroll',function(){
    var stop = Math.round($(window).scrollTop());
    if (stop > 100) {
        console.log("adding");
        $('nav').addClass('navbargrad');
    } else {
        console.log("remving");
        $('nav').removeClass('navbargrad');
    }
  });
});
