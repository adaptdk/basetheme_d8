module.exports = function search() {
  // Execute code on document ready
  (function($){

      $('.layout-header #search-block-form').submit(function( event ) {
        var value=$.trim($("#edit-keys").val());

        if ($(this).hasClass('expanded') && value.length > 0) {
          return true;
        }
        else if ($(this).hasClass('expanded') && value.length === 0) {
          $('.layout-header #search-block-form').removeClass('expanded');
          return false;
        }
        else {
          $(this).addClass('expanded');
          return false;
        }
      });

  })(jQuery);
};


