'use strict'

var questions=[
{
    text: "Как звали крокодила, друга Чебурашки?:",
    answers: ["Гена",
          "Генератор",
          "Ганджубас"],
    correctAnswer: 0 
},
{
    text: "Как звали черепаху?",
    answers: ["Тротилла",
          "Тортилла",
          "Торчилла"],
    correctAnswer: 1
},
{
    text: "У тебя все хорошо?:",
    answers: ["Да!! Все отлично",
          "Не, не очень.",
          "Такое"],
    correctAnswer: 0
}
];

var yourAns = new Array;
var score = 0;

function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
    var num = i+1;
    answerText=answerText+"\n    Вопрос №"+ num +"";
    if(yourAns[i]!=questions[i].correctAnswer){
        answerText=answerText+"\n    Правильный ответ: " +
        questions[i].answers[questions[i].correctAnswer] + "\n";
      }
        else{
        answerText=answerText+": Верно! \n";
        ++score;
        }
       }

   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

   alert(answerText);
   yourAns = [];
   score = 0;
   clearForm("quiz");
}
function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
}
};

