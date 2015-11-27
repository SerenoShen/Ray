/**
 * Created by shenlei2 on 2015/11/26.
 */

;(function( factory ) {
    if ( typeof define === "function" && define.amd ) {
        // AMD. Register as an anonymous module.
        define([ ], factory );
    } else {
        // Browser globals
        factory();
    }
}(function () {

    Ray = function (){
        return new Ray.fn.init();
    };

    Ray.fn = Ray.prototype = {
        constructor : Ray,

        version : '0.1.0-SNAPSHOT'
    };

    Ray.fn.init = function (){

    };

    window.R = window._$Ray = Ray;

}));
