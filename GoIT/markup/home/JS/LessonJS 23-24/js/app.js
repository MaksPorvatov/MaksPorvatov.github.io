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
  ['jquery', 'tmpl', 'model', 'view', 'controller'],
  function(jquery, tmpl, model, view, ontroller) {

    var firstToDoList = ['JavaScript', 'HTML', 'CSS', 'jQuery'];
    var newModel = new model(firstToDoList);
    var newView = new view(newModel);
    var newController = new controller(newModel, newView);
  }
);