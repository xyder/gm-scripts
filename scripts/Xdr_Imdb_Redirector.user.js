// ==UserScript==
// @name        Xdr Imdb Redirector
// @namespace   sncco.xdr.gen.imdb.redirect
// @description Removes some get params and redirects to a clean url.
// @require     ../libraries/utils.js
// @include     *://www.imdb.com/*
// @version     1.0.1
// @grant       unsafeWindow
// @credits     Xyder
// ==/UserScript==

(function(){
    (new XUtils()).redirectPage(window, document, [], true);
})();
