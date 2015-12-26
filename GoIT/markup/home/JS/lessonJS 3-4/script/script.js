var test = {
  paintTest: function(test) {

    var questionNumber = document.createElement('div');
    questionNumber.classList.add('questionNumber');
    questionNumber.innerHTML = 'Question '+test+'';
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(questionNumber);

    var checkbox1 = document.createElement('div');
    checkbox1.classList.add('checkQuestion1');
    checkbox1.innerHTML = '<input type=\'radio\' name="'+test+'" > Answer 1';
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(checkbox1);

    var checkbox2 = checkbox1.cloneNode(true);
    checkbox2.innerHTML = '<input type=\'radio\' name="'+test+'" > Answer 2';
    wrapper.appendChild(checkbox2);

    var checkbox3 = checkbox1.cloneNode(true);
    checkbox3.innerHTML = '<input type=\'radio\' name="'+test+'" > Answer 3';
    wrapper.appendChild(checkbox3);
  },

  titleTest: function(){
    var titleTest = document.createElement('div');
    titleTest.classList.add('titleTest');
    titleTest.innerHTML = "Programmin test";
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(titleTest);
  },

  checkAnswers: function (){
    var checkAnswers = document.createElement('div');
    checkAnswers.classList.add('checkAnswers');
    checkAnswers.innerHTML = 'My results';
    var wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(checkAnswers);
  }



}

test.titleTest();
test.paintTest(1);
test.paintTest(2);
test.paintTest(3);
test.checkAnswers();

