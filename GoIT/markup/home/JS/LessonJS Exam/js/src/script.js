$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: true,
    controlNav: false,
  });


$.support.cors = true;

var images = '';

		function renderGrid(images) {

			$.ajax({
				cache: false,
        dataType: 'json',
        type: 'GET',
				url: '//api.pixplorer.co.uk/image?word=' + images + '&amount=7&size=tb',
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











