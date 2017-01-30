$(document).ready(function() {

  // burger nav effect X
  $(".burger-container").on("click", function() {
    $(".burger-container").toggleClass("open"),
    $(".fullnav").toggleClass("open");
    $(".fullnav").removeClass("close");
  });

  $(".fullnav-contents").on("click", function(){

    $(".fullnav").toggleClass("close");
    $(".burger-container").toggled();
    $(".burger-container").toggleClass('open');
  });


  //flexslider
  $('.flexslider').flexslider({
    animation: "fade",
    itemMargin: 0
  });

});
