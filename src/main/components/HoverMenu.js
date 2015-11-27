/**
 * Created by shenlei2 on 2015/11/27.
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

    Ray = window._$Ray || {};

}));