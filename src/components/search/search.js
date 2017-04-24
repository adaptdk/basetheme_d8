module.exports = function search() {
  // Execute code on document ready
  (function($){

      var form = $('.layout-header #search-block-form');
      var inputField = form.find("input.form-search");

      form.submit(function( event ) {

        var value=$.trim($("#edit-keys").val());

        if (form.hasClass('expanded') && value.length > 0) {
          return true;
        }
        else if (form.hasClass('expanded') && value.length === 0) {
          form.removeClass('expanded');
          return false;
        }
        else {
          form.addClass('expanded');
          inputField.focus();
          return false;
        }
      });

      $(document).mouseup(function (e)
      {
          var container = $(".layout-header");

          if (!container.is(e.target) // if the target of the click isn't the container...
              && container.has(e.target).length === 0) // ... nor a descendant of the container
          {
            form.removeClass('expanded');
          }
      });

  })(jQuery);
};


