$(function() {
  
  var html = $('#test').html();
  var articles = [
    {
    	name: 'Порватов Максим Володимич',
    	photo: 'photo.png',
    	iam: 'Судент курсу Front-end',
    	iwant: 'Хочу вивчати фронтенд тому-що:',
    	cool: 'it is cool',
    	phone: '+33333333',
    	
    },
  ]

  var content = tmpl(html, {
    data: articles
  });

  $('body').append(content);
});

