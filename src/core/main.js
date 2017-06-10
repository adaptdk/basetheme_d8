require('./main.scss');

require('../components/search/search')();


(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.mainjs = {
        attach: function (context, settings) {

        }
    };
})(jQuery, Drupal, drupalSettings);
