/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	__webpack_require__(6)();
	__webpack_require__(7)();
	__webpack_require__(8)();

	(function ($, Drupal, drupalSettings) {
	    Drupal.behaviors.mainjs = {
	        attach: function (context, settings) {

	        }
	    };
	})(jQuery, Drupal, drupalSettings);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = function component() {
	  // Execute code on document ready
	  (function($){

	    // Put your components javascript here ..

	  });
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

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




/***/ },
/* 8 */
/***/ function(module, exports) {

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




/***/ }
/******/ ]);