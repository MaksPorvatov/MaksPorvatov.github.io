$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: true
  });

  (function(){
    $.getJSON('http://api.pixplorer.co.uk/image?word=Sport+activity&size=l', 
  	  function (sport) {
  	  	$.each(sport.images, function(i,images){
          var template = $('#template').html();   
          var sportImg = {
          	images: images
          };
          var content = tmpl(template, {
          	data: sportImg
          });

          $('.ideas').append(content);

          $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
          });


        });
    })

    $.getJSON('http://api.pixplorer.co.uk/image?word=Wellness&size=l', 
  	  function (wellness) {
  	  	$.each(wellness.images, function(i,images){
          var template = $('#template').html();   
          var wellnestImg = {
          	images: images
          }
          var content = tmpl(template, {
          	data: wellnestImg
          });

          $('.ideas').append(content);

        });
    })

    $.getJSON('http://api.pixplorer.co.uk/image?word=Games+cards&size=l', 
  	  function (games) {
  	  	$.each(games.images, function(i,images){
          var template = $('#template').html();   
          var gamestImg = {
          	images: images
          }
          var content = tmpl(template, {
          	data: gamestImg
          });

          $('.ideas').append(content);


        });
    })

    $.getJSON('http://api.pixplorer.co.uk/image?word=Extremsport&size=l', 
  	  function (extremsport) {
  	  	$.each(extremsport.images, function(i,images){
          var template = $('#template').html();   
          var extremsportImg = {
          	images: images
          }
          var content = tmpl(template, {
          	data: extremsportImg
          });

          $('.ideas').append(content);

        });
    })


    $.getJSON('http://api.pixplorer.co.uk/image?word=Culture+educetion&size=l', 
  	  function (culture) {
  	  	$.each(culture.images, function(i,images){
          var template = $('#template').html();   
          var cultureImg = {
          	images: images
          }
          var content = tmpl(template, {
          	data: cultureImg
          });

          $('.ideas').append(content);

        });
    })

     $.getJSON('http://api.pixplorer.co.uk/image?word=Relaxation&size=l', 
  	  function (relaxation) {
  	  	$.each(relaxation.images, function(i,images){
          var template = $('#template').html();   
          var relaxationImg = {
          	images: images
          }
          var content = tmpl(template, {
          	data: relaxationImg
          });

          $('.ideas').append(content);

        });
    })

    $.getJSON('http://api.pixplorer.co.uk/image?word=Travelling&size=l', 
  	  function (travelling) {
  	  	$.each(travelling.images, function(i,images){
          var template = $('#template').html();   
          var travellingImg = {
          	images: images
          }
          var content = tmpl(template, {
          	data: travellingImg
          });

          $('.ideas').append(content);

          $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
          });
        });
    })

    $('#searchbtn').on('click', function(event){
        event.preventDefault();
        var text = $('#searchbar').val();
        $('.grid').remove();

        $.getJSON('http://api.pixplorer.co.uk/image?word='+text+'&amount=7&size=l', function(showNewList){
          $.each(showNewList.images, function(i,images){
            var template = $('#template').html();   
            var showNewList = {
          	  images: images
            }
            var content = tmpl(template, {
          	  data: showNewList
            });

            $('.ideas').append(content);

            $('.grid').isotope({
              itemSelector: '.grid-item',
              layoutMode: 'fitRows'
            });
        });   
       });
    })



  })();  
});//dReady



          // $('.grid').isotope({
          //   itemSelector: '.grid-item',
          //   layoutMode: 'fitRows'
          // });










