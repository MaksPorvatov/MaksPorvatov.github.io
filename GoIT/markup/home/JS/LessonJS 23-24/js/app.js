requirejs.config({
  paths: {
  	'jquery': 'https://code.jquery.com/jquery-1.12.0.min'
  },
  shin: {
  	'jquery': {
  		exports: 'jquery'
  	}
  }
})




require(
  [ 
    'template',
    'Model',
    'View',
    'Controller',
    'jquery'
  ],

  function(template, Model, View, Controller, $){

  	$(function() {
       var firstToDoList = ['learn javascript','learn html', 'make coffe'];
       var newModel = new Model(firstToDoList);
       var newView = new View(newModel);
       var newController = new Controller(newModel, newView);
    });
  }
);