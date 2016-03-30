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
    var model = new model(firstToDoList);
    var view = new view(model);
    var controller = new controller(model, view);
  }
);