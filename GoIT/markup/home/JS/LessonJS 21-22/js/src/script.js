'use strict'

$(function () {
  


  const info = [
    {
      question : "Как звали черепаху?",
      answer   : [
      "Торчила",
      "Тортила",
      "Тротила"
      ],
      rightAnswer: {
        2:true
      }
    },
    {
      question : "Спутник земли",
      answer   : [
      "Луна",
      "Марс",
      "Солнце"
      ],
      rightAnswer: {
        1:true
      }
    },
    {
      question : "Крокодил друг чебурашки",
      answer   : [
      "Генадий",
      "Ганджубас",
      "Генератор"
      ],
      rightAnswer: {
        1:true,
      },
    }

  ];

  localStorage.setItem('data', JSON.stringify(info));

  const questions = JSON.parse(localStorage.getItem('data')); 
  
  const htmlQuestion = $('#questionsGenerate').html();
  const content = tmpl(htmlQuestion, {
  data: questions
  });
  $('.questions').append(content);







function checkAnswer(e) {
  e.preventDefault();

    let error = false;
    
    const user = [];
    
    for (let i = 0; i < questions.length; i++) {
        
      const inputs = $('.box' + i +' input:checkbox');
            
      const userAnswered = {};
        for (let k = 0; k < inputs.length; k++) { 
           const checked = inputs[k].checked;
       
           const right = questions[i].rightAnswer[k+1] == true;
        
           if (checked !== right) {
            userAnswered[k]=false;
               error = true;
                
           } else {
            userAnswered[k]=true;
            };
    };
    
        user.push(userAnswered);
      
  };
        

      
      function modalWindow () {
        const $modal = $('<div class="modalWindow animated bounceInDown"><h2 class="text-center">Результат теста ' + (error? 'негативный!' : 'положительный!' )+'</h2></div>');
        const $overlay = $('<div class="modalWindow-overlay"></div>');
        
        $('body').append($modal);
        $('body').append($overlay);
        
        const htmlQuestion = $('#questionsGenerate').html();
      
      const content = tmpl(htmlQuestion, {
        data: questions
      });
      
            
      $('.modalWindow').append(content);
      let $buttonOk = $('<button class="btn btn-md btn-success" style="float:right">OK!</button>');
      
      $('.modalWindow').append($buttonOk);

        for (let i = 0; i < questions.length; i++) {
          const inputs = $('.box' + i +' input:checkbox');
          const inputsShowResult =  $('.modalWindow .box' + i +' input:checkbox');
          
          for (let k = 0; k < questions[i].answer.length; k++) {
            
            const checked = inputs[k].checked;
          
          if ((checked == true)) {
            if ((user[i][k]) == true) {
              $(inputsShowResult[k]).attr({
                "disabled":true,
                "checked" : true  
                }).parent().append("<span> Правильный ответ!</span>").find("span").css({"color" : "green"});
          } else {
            $(inputsShowResult[k]).attr({
                "disabled":true,
                "checked" : true  
                }).parent().append("<span> Неправильный ответ!</span>").find("span").css({"color" : "red"});  

          }; 

          } else {
            $(inputsShowResult[k]).attr({
                "disabled":true,
                "checked" : false 
          });
          };

        };
        };

        $overlay.one('click', hideModal);
        $buttonOk.one('click', hideModal);

        function hideModal() {
          $modal.removeClass('bounceInDown').addClass('hinge');
          setTimeout(function(){$modal.remove();});
          $overlay.remove();
        };

      };

      modalWindow();

};

 


$('.check').on('click', checkAnswer);


});

