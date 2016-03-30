requirejs.config({
  paths: {
    'jquery': 'http://code.jquery.com/jquery-1.11.3.min',
    'template': 'template'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'template': {
      exports: 'template'
    }
  }
});

require(
  ['jquery', 'template', 'Model', 'View', 'Controller'],
  function(jquery, template, Model, View, Controller) {

    var firstToDoList = ['Make coffee', 'Go to bed', 'Learn', 'Nothing'];
    var Model = new Model(firstToDoList);
    var View = new View(Model);
    var Controller = new Controller(Model, View);
  }
);