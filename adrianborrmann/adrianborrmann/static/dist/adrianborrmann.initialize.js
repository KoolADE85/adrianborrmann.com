/*! Adrian Borrmann Portfolio Website - http://adrianborrmann.com last modified 2015-04-02*/
(function(){var a=this,b=a.jQuery,c=a.AdrianBorrmann||(a.AdrianBorrmann={}),d=c.Core=function(a){var c={};this.config=b.extend(!0,c,a||{}),this._initializePage()};d.prototype._initializePage=function(){b("html").removeClass("loading");var a=b("body").prop("class").split(" "),c=a.length;if(c>0)for(;c--;)switch(a[c]){case"resume-page":this._initResume();break;case"home":}},d.prototype._initResume=function(){b("section").on("click",function(){b("section.active").removeClass("active"),b(this).addClass("active")})}}).call(this);
//# sourceMappingURL=adrianborrmann.initialize.js.map