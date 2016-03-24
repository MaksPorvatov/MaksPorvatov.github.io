$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: true
  });

  // (function(){

  // 	var sport = '';
  //   function renderList(sport) {

		// 	$.ajax({
		// 		url: 'http://api.pixplorer.co.uk/image?word=wellness&amount=7&size=tb',
		// 		success: function(data) {
		// 			console.log(data);
		// 			var piclist = tmpl($('#template').html(), data);

		// 			$('.grid').remove();

		// 			$('.ideas').append(piclist);
		// 			$('.grid').isotope({
		// 				itemSelector: '.grid-item',
		// 				layoutMode: 'masonry',
		// 				masonry: {
		// 					gutter: 20
		// 				}
		// 			});
		// 		}
		// 	});
		// }

		// $('#form-search-partners').submit(function(e) {

		// 	e.preventDefault();
		// 	var query = encodeURIComponent($('#searchbar').val());
		// 	renderList(query);

		// });

		// renderList();

  //   // $.getJSON('http://api.pixplorer.co.uk/image?word=Wellness&size=l', 
  // 	 //  function (wellness) {
  // 	 //  	$.each(wellness.images, function(i,images){
  //   //       var template = $('#template').html();   
  //   //       var wellnestImg = {
  //   //       	images: images
  //   //       }
  //   //       var content = tmpl(template, {
  //   //       	data: wellnestImg
  //   //       });

  //   //       $('.ideas').append(content);

  //   //     });
  //   // })

  //   // $.getJSON('http://api.pixplorer.co.uk/image?word=Games+cards&size=l', 
  // 	 //  function (games) {
  // 	 //  	$.each(games.images, function(i,images){
  //   //       var template = $('#template').html();   
  //   //       var gamestImg = {
  //   //       	images: images
  //   //       }
  //   //       var content = tmpl(template, {
  //   //       	data: gamestImg
  //   //       });

  //   //       $('.ideas').append(content);


  //   //     });
  //   // })

  //   // $.getJSON('http://api.pixplorer.co.uk/image?word=Extremsport&size=l', 
  // 	 //  function (extremsport) {
  // 	 //  	$.each(extremsport.images, function(i,images){
  //   //       var template = $('#template').html();   
  //   //       var extremsportImg = {
  //   //       	images: images
  //   //       }
  //   //       var content = tmpl(template, {
  //   //       	data: extremsportImg
  //   //       });

  //   //       $('.ideas').append(content);

  //   //     });
  //   // })


  //   // $.getJSON('http://api.pixplorer.co.uk/image?word=Culture+educetion&size=l', 
  // 	 //  function (culture) {
  // 	 //  	$.each(culture.images, function(i,images){
  //   //       var template = $('#template').html();   
  //   //       var cultureImg = {
  //   //       	images: images
  //   //       }
  //   //       var content = tmpl(template, {
  //   //       	data: cultureImg
  //   //       });

  //   //       $('.ideas').append(content);

  //   //     });
  //   // })

  //   //  $.getJSON('http://api.pixplorer.co.uk/image?word=Relaxation&size=l', 
  // 	 //  function (relaxation) {
  // 	 //  	$.each(relaxation.images, function(i,images){
  //   //       var template = $('#template').html();   
  //   //       var relaxationImg = {
  //   //       	images: images
  //   //       }
  //   //       var content = tmpl(template, {
  //   //       	data: relaxationImg
  //   //       });

  //   //       $('.ideas').append(content);

  //   //     });
  //   // })

  //   // $.getJSON('http://api.pixplorer.co.uk/image?word=Travelling&size=l', 
  // 	 //  function (travelling) {
  // 	 //  	$.each(travelling.images, function(i,images){
  //   //       var template = $('#template').html();   
  //   //       var travellingImg = {
  //   //       	images: images
  //   //       }
  //   //       var content = tmpl(template, {
  //   //       	data: travellingImg
  //   //       });

  //   //       $('.ideas').append(content);

  //   //       $('.grid').isotope({
  //   //         itemSelector: '.grid-item',
  //   //         layoutMode: 'fitRows'
  //   //       });
  //   //     });
  //   // })

  //   // $('#searchbtn').on('click', function(event){
  //   //     event.preventDefault();
  //   //     var text = $('#searchbar').val();
  //   //     $('.grid').remove();

  //   //     $.getJSON('http://api.pixplorer.co.uk/image?word='+text+'&amount=7&size=l', function(showNewList){
  //   //       $.each(showNewList.images, function(i,images){
  //   //         var template = $('#template').html();   
  //   //         var showNewList = {
  //   //       	  images: images
  //   //         }
  //   //         var content = tmpl(template, {
  //   //       	  data: showNewList
  //   //         });

  //   //         $('.ideas').append(content);

  //   //         $('.grid').isotope({
  //   //           itemSelector: '.grid-item',
  //   //           layoutMode: 'fitRows'
  //   //         });
  //   //     });   
  //   //    });
  //   // })



  // })();  

$.support.cors = true;

var images = '';

		function renderGrid(images) {

			$.ajax({
				cache: false,
        dataType: 'json',
        type: 'GET',
				url: 'http://api.pixplorer.co.uk/image?word=' + images + '&amount=7&size=tb',
				success: function(data) {
					var imagesGrid = tmpl($('#template').html(), data);

					$('.grid').remove();

					$('.ideas').append(imagesGrid);
					$('.grid').isotope({
						itemSelector: '.grid-item',
						layoutMode: 'masonry',
						masonry: {
							gutter: 20
						}
					});

				}
			});
		}

		$('#form-search-partners').submit(function(e) {

			e.preventDefault();
			var query = encodeURIComponent($('#searchbar').val());
			renderGrid(query);

		});

		renderGrid();




});//dReady



          // $('.grid').isotope({
          //   itemSelector: '.grid-item',
          //   layoutMode: 'fitRows'
          // });










