var richTextEditor = {
  bindEvents: function() {
    this.bindDesignModeToggle();
    this.bindToolbarButtons();
  },

  bindDesignModeToggle: function() {
    $('#page').on('click', function(e) {
      document.designMode = 'on';
    });

    $(document.body).on('click', function(e) {
      var $target = $(e.target);

      if ($target.is('body')) {
        document.designMode = 'off';
      }
    });
  },

  bindToolbarButtons: function() {
    $('#toolbar').on('mousedown', '.icon', function(e) {
      e.preventDefault();
      var btnId = $(e.target).attr('id');
      this.editStyle(btnId);
    }.bind(this));
  },

  editStyle: function(btnId) {
    if (btnId === 'createLink') {
      if (this.isSelection()) {
        var link = prompt('Enter a link:');
        if (link) document.execCommand(btnId, true, link);
      }
    } else {
      document.execCommand(btnId, true, null);
    }
  },

  isSelection: function() {
    var selection = window.getSelection();
    return selection.anchorOffset !== selection.focusOffset
  },

  init: function() {
    this.bindEvents();
  },
}

richTextEditor.init();
