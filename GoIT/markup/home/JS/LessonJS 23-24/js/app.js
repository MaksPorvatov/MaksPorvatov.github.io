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

    var firstToDoList = ['Make coffee', 'Go to bed', 'Learn', 'Nothing'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
  }
);