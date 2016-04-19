$(function() {
    
  $('input[type="submit"]').prop('disabled', true); 

  $('input:radio').click(function() {
    if($(this).val() ) {
      $('input[type="submit"]').prop('disabled', false);
    }
  })

  $('.tooltip').tooltipster({
  	animation: 'fade',
  	delay: 200,
  	maxWidth: 300,
  	content: 'Lorem ipsum dolor sit amet',
  	theme: 'tooltipster-theme',
  	timer: 1000,
  });

  $('.send-answer').click(function() {
  	$(this).css({
  		color: 'white',
  		'background-color': '#ffa77a',
  		border: 'none'
  	})
  }) 


  // enquire.register("screen and (max-width:300px)", {
  //   match : function() {

  //     $('.tooltip').tooltipster({
  // 	    animation: 'fade',
  // 	    delay: 200,
  // 	    maxWidth: 300,
  // 	    content: 'Lorem ipsum dolor sit amet',
  // 	    theme: 'tooltipster-theme',
  // 	    trigger: 'hover',
  // 	    autoClose: false,
  // 	    hideOnClick: true,
  //     });

  //   }
  // })

});