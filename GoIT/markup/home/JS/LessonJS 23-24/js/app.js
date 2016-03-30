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
    'tmpl',
    'Model',
    'View',
    'Controller',
    'jquery'
  ],

  function(tmpl, Model, View, Controller, $){

    var firstToDoList = ['Make coffee', 'Go to bed', 'Learn', 'Nothing'];
    var newModel = new Model(firstToDoList);
    var newView = new View(newModel);
    var newController = new Controller(newModel, newController);
  }
);