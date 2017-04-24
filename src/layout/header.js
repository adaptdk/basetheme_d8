module.exports = function header() {
  // Execute code on document ready
  (function($){

      var mobileMenu = $("#mobile-nav");
      var menuContainer = mobileMenu.parent();
      var menuWrapper = menuContainer.find("> ul");

      mobileMenu.once().on("click", function() {

        if (menuContainer.hasClass('expanded')) {
          menuContainer.removeClass('expanded');
          menuWrapper.fadeOut(300);
          return false;
        }
        else {
          menuContainer.addClass('expanded');
          menuWrapper.fadeIn(300);
          return false;
        }

      });

      //click outside menu
      $(document).mouseup(function (e)
      {
          if (!menuWrapper.is(e.target) && !mobileMenu.is(e.target)  // if the target of the click isn't the menuContainer...
              && menuWrapper.has(e.target).length === 0) // ... nor a descendant of the menuContainer
          {
            menuContainer.removeClass('expanded');
            menuWrapper.fadeOut(300);
          }
      });

  })(jQuery);
};


