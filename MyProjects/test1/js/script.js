$(function() {

  $('.menu__mob__cont').hide();  
  $('.menu__icon').on('click', function () {
    $('.wrapper').css({
      "float": "right", 
      "left": 204
    })
    $('.menu__mob__cont').toggle("slow");

    $( "div .block2__blocks" ).on('click', function () {
      $( this ).addClass( "highlight" );
    });

  })

});