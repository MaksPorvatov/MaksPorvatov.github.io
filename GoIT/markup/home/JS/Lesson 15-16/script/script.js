'use stict'

$(function () {
  
        
    $('#form').submit(function(){
        var text = encodeURIComponent($('#fild').val());        
        var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ text + '&callback=GoogleCallback&context=?';
           
        $.ajax({
            url: urlFull,
            dataType : "jsonp"
        });
        return false;
    });

    $( '#search' ).click(function() {
      $( '#fild' ).css('margin-top', '0px')
    });
    
});
 
function GoogleCallback (func, data) {
  var htmlResult = $('#resultsGenerate').html();
  var content = tmpl(htmlResult, data);
  $('.results').html('').append(content);
    
};






var Human = {
  name: 'Maks',
  age: 22,
  sex: 'male',
  weight: 67,
  height: 180
};

var worker = {
  job: 'Grawe ua',
  salary: '10000/m',
  work: function(){

  }
};

var student = {
  stydy: 'Goit',
  money: 13000,
  watchSeriales: function() {
    
  }
}


worker.__proto__ = Human;
student.__proto__ = Human; 

console.log('worker', worker);
console.log('student', student);







