/*
 * Adrian Borrmann
 * http://adrianborrmann.com
  */

(function () {
    
    var global = this;
    var $ = global.jQuery;


    var AdrianBorrmann = (global.AdrianBorrmann || (global.AdrianBorrmann = { }));


    var Core = AdrianBorrmann.Core = function(options) {
        var defaults = { };
        this.config         = $.extend(true, defaults, options || { });
        this._initializePage();
    };


    Core.prototype._initializePage = function() {

        $('html').removeClass('loading');

        var classnames = $('body').prop('class').split(' ');
        var index = classnames.length;
        
        if (index > 0) {
            while(index--) {
                switch (classnames[index]) {
                    case 'resume-page':
                        this._initResume();
                        break;

                    case 'home':
                        break;

                    default:
                        break;
                }
            }
        }
    };
    
    
    Core.prototype._initResume = function() {
        
        $('section').on('click', function(e) {
            $('section.active').removeClass('active');
            $(this).addClass('active');
        });
    };
    
}).call(this);
