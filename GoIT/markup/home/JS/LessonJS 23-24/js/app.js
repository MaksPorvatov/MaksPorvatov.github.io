requirejs.config({
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
    'tmpl': 'tmpl'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});

require(
  ['jquery', 'tmpl', 'Model', 'View', 'Controller'],
  function(jquery, tmpl, Model, View, Controller){

    var firstToDoList = ['Make coffee', 'Go to bed', 'Learn', 'Nothing'];
    var newModel = new Model(firstToDoList);
    var newView = new View(newModel);
    var newController = new Controller(newModel, newController);
  }
);