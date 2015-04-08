// ==UserScript==
// @name        Xdr Steam Redirector
// @namespace   sncco.xdr.gen.steam.redirect
// @description Removes some get params and redirects to a clean url.
// @require     ../libraries/utils.js
// @include     *steamcommunity.com/sharedfiles/filedetails/*
// @include		*store.steampowered.com/*
// @version     1.0.1
// @grant       unsafeWindow
// @credits     Xyder
// ==/UserScript==

(function(){
	// keep the 'id' parameter, delete all the rest
	(new XUtils()).redirectPage(window, document, ['id'], true);
})();
