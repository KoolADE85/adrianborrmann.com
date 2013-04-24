/*
 * Adrian Borrmann
 * http://adrianborrmann.com
  */

(function () {
    
    var global = this;
    var _ = global._;
    var $ = global.jQuery;


    var AdrianBorrmann = (global.AdrianBorrmann || (global.AdrianBorrmann = { }));


    var Core = AdrianBorrmann.Core = function(options) {
        var defaults = { };
        this.config         = $.extend(true, defaults, options || { });
        this._initializePage();
    };


    Core.prototype._initializePage = function() {
        var classnames = $('body').prop('class').split(' ');
        var index = classnames.length;
        
        if (index > 0) {
            while(index--) {
                switch (classnames[index]) {
                    case 'resume-page':
                        this._initResume();
                        break;
                }
            }
        }
    };
    
    
    Core.prototype._initResume = function() {
        
        $('section').on('click', function(e) {
            var openCurrentTarget = true;
            $('section.active').each(function() {
               if (e.currentTarget == this) openCurrentTarget = false;
               $(this).removeClass('active');
            });
            
            if (openCurrentTarget) $(this).addClass('active');
        });
    };
    
}).call(this);
