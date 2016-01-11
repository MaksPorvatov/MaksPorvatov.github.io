$(function() {
    $('.jcarousel').jcarousel({
    });
});



(function($) {
$(function() {

  $('input, select').styler();

});
})(jQuery);



// $(function () {
//   var $links = $('.menu a');

//   $links.hover(
//   function () {
//     var $submenu = $(this).siblings('.submenu');
//     $submenu.show();

//   },
//   function () {
//     var $submenu = $(this).siblings('.submenu');
//     $submenu.hide();

//   });
// });

$(document).ready(function() {
  $( '.dropdown' ).hover(
    function(){
      $(this).children('.submenu').slideDown(200);
    },
    function(){
      $(this).children('.submenu').slideUp(200);
    }
  );
});

$(document).ready(function() {
  $( '.dropdown1' ).hover(
    function(){
      $(this).children('.submenu1').slideDown(200);
    },
    function(){
      $(this).children('.submenu1').slideUp(200);
    }
  );
});








