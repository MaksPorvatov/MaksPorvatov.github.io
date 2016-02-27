$(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( ".opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });

jQuery(function($){
   $("#phone").mask("+38 (999) 999-99-99");
});



$(function(){
  $(window).scroll(function() {
    var top = $(document).scrollTop();
      if (top < 650) $(".menu--fixed--wrapper").css({top: '0', position: 'relative', 'width': '100%'});
      else $(".menu--fixed--wrapper").css({top: '0', position: 'fixed', 'width': '100%'});
  });
});




$(function() {
  var $dialog = $('#dialog');
  var $takeCall = $('.take--call');
  $takeCall.click(
    function (){
      $dialog.remove();
    })
});


$(function() {
  $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  $( "#tabs a").click(
    function() {
      $(this).addClass("tabs--click");
    })
});


$(window).load(function() {
  $('.carousel').flexslider({
     animation: "slide",
     asNavFor: '.slider'
  });

  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
  });
});


$(function() {

  var $feedForm = $('#feedback--form');
  var $feedbackForm = $('.openerForm');

  $feedbackForm.click(
    function(){
      $feedForm.css({
        'display': 'block',
      });
    })


});















