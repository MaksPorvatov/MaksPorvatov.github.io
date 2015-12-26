$(document).ready(function () {


  var $inputHelp1 = $('#firstname');

  $inputHelp1.hover(
    function () {
      var $help1 = $('.help1');
      $('#help_1').show();

    },
    function () {
      var $help1 = $('.help1');
      $('#help_1').hide();
    }
  );




  var $inputHelp2 = $('#lastname');

  $inputHelp2.hover(
    function () {
      var $help2 = $('.help2');
      $('#help_2').show();

    },
    function () {
      var $help2 = $('.help2');
      $('#help_2').hide();
    }
  );




  var $inputHelp3 = $('#address');

  $inputHelp3.hover(
    function () {
      var $help3 = $('.help3');
      $('#help_3').show();

    },
    function () {
      var $help3 = $('.help3');
      $('#help_3').hide();
    }
  );


  var $clickButton = $('.helpButton');

  $clickButton.on('click', function() {
    $('.help1').show();
    $('.help2').show();
    $('.help3').show();
  });

});






