define(
	'Controller',
	['jquery', 'Model', 'View'],
  function() {
	  function Controller(model, view) {
      var self = this;
  
      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.item--delete', removeItem);

      function addItem() {
  	    var newItem = view.elements.input.val();
  	    model.addItem(newItem); 
  	    view.renderList(model.data);
  	    view.elements.input.val('');
      };

      function removeItem() {
        var item = $(this).attr("data-value");
        model.removeItem(item);
        view.renderList(model.data);
      };

      function renameItem() {
        var item = $(this).val();
        var index = $(this).parent().index();

        model.renameItem(item, index);
        view.renderList(model.data);
      };

    }

    return Controller;
  }
);