'use strict';

$(function () {

  var info = [{
    question: "Как звали черепаху?",
    answer: ["Торчила", "Тортила", "Тротила"],
    rightAnswer: {
      2: true
    }
  }, {
    question: "Спутник земли",
    answer: ["Луна", "Марс", "Солнце"],
    rightAnswer: {
      1: true
    }
  }, {
    question: "Крокодил друг чебурашки",
    answer: ["Генадий", "Ганджубас", "Генератор"],
    rightAnswer: {
      1: true
    }
  }];

  localStorage.setItem('data', JSON.stringify(info));

  var questions = JSON.parse(localStorage.getItem('data'));

  var htmlQuestion = $('#questionsGenerate').html();
  var content = tmpl(htmlQuestion, {
    data: questions
  });
  $('.questions').append(content);

  function checkAnswer(e) {
    e.preventDefault();

    var error = false;

    var user = [];

    for (var i = 0; i < questions.length; i++) {

      var inputs = $('.box' + i + ' input:checkbox');

      var userAnswered = {};
      for (var k = 0; k < inputs.length; k++) {
        var checked = inputs[k].checked;

        var right = questions[i].rightAnswer[k + 1] == true;

        if (checked !== right) {
          userAnswered[k] = false;
          error = true;
        } else {
          userAnswered[k] = true;
        };
      };

      user.push(userAnswered);
    };

    function modalWindow() {
      var $modal = $('<div class="modalWindow animated bounceInDown"><h2 class="text-center">Результат теста ' + (error ? 'негативный!' : 'положительный!') + '</h2></div>');
      var $overlay = $('<div class="modalWindow-overlay"></div>');

      $('body').append($modal);
      $('body').append($overlay);

      var htmlQuestion = $('#questionsGenerate').html();

      var content = tmpl(htmlQuestion, {
        data: questions
      });

      $('.modalWindow').append(content);
      var $buttonOk = $('<button class="btn btn-md btn-success" style="float:right">OK!</button>');

      $('.modalWindow').append($buttonOk);

      for (var i = 0; i < questions.length; i++) {
        var inputs = $('.box' + i + ' input:checkbox');
        var inputsShowResult = $('.modalWindow .box' + i + ' input:checkbox');

        for (var k = 0; k < questions[i].answer.length; k++) {

          var checked = inputs[k].checked;

          if (checked == true) {
            if (user[i][k] == true) {
              $(inputsShowResult[k]).attr({
                "disabled": true,
                "checked": true
              }).parent().append("<span> Правильный ответ!</span>").find("span").css({ "color": "green" });
            } else {
              $(inputsShowResult[k]).attr({
                "disabled": true,
                "checked": true
              }).parent().append("<span> Неправильный ответ!</span>").find("span").css({ "color": "red" });
            };
          } else {
            $(inputsShowResult[k]).attr({
              "disabled": true,
              "checked": false
            });
          };
        };
      };

      $overlay.one('click', hideModal);
      $buttonOk.one('click', hideModal);

      function hideModal() {
        $modal.removeClass('bounceInDown').addClass('hinge');
        setTimeout(function () {
          $modal.remove();
        });
        $overlay.remove();
      };
    };

    modalWindow();
  };

  $('.check').on('click', checkAnswer);
});
