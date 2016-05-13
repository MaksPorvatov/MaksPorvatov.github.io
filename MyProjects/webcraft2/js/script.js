$(function(){

	// BURGER MENU
	$('#menu').slicknav({
		label: "",
		duration: 1000,
	});

	// MODAL WINDOW
	var overlay = $('#overlay'); 
  var open_modal = $('.open_modal'); 
  var close = $('#overlay'); 
  var modal = $('.modal_form'); 

  open_modal.click( function(event){ 
    event.preventDefault(); 
    var div = $(this).attr('href'); 
    overlay.fadeIn(400, 
      function(){ 
        $(div) 
          .css('display', 'block') 
          .animate({opacity: 1, top: '50%'}, 200); 
      });
  });

  close.click( function(){ 
     modal 
      .animate({opacity: 0, top: '45%'}, 200, 
      function(){ 
        $(this).css('display', 'none');
          overlay.fadeOut(400); 
       }
      );
  });

  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: true,
    controlNav: false,
  });

});