/*
	Author:    Xyder
	Version:   1.0.1
*/
function XUtils(){
    var self = this;
    // if isWhitelist is true it will delete any parameters not in prefixes list
    // else it will delete any parameters in prefixes list (considered a blacklist)
    self.removeParamsFromUrl = function(prefixes, url, isWhitelist){
        var parts = url.split('?');
        //if we found at least one parameter after '?'
        if(parts.length >= 2){
            var urlbase = parts.shift();

            //check if any prefixes were specified
            if(prefixes == undefined || prefixes.length < 1){
                if(isWhitelist){
                    //delete all params because the whitelist contains no elements
                    return urlbase;
                } else {
                    //keep all params because the blacklist contains no elements
                    return url;
                }
            } else {
                var params = parts.join('?').split(/[&;]/g);
                var eprefixes = new Array();

                //prepare prefixes
                for(var i = prefixes.length; i-- > 0;){
                    eprefixes.push(encodeURIComponent(prefixes[i]) + '=');
                }

                //cycle parameters
                for(var i = params.length; i-- > 0;){
                    //cycle prefixes
                    for(var j = eprefixes.length; j-- > 0;){
                        //check if prefix matches
                        if(params[i].lastIndexOf(eprefixes[j], 0) !== -1){
                            if(!isWhitelist){
                                //found a parameter which is blacklisted
                                params.splice(i, 1);
                                break;
                            }
                        } else {
                            if(isWhitelist){
                                //found a parameter which is not whitelisted
                                params.splice(i, 1);
                                break;
                            }
                        }
                    }
                }

                console.log(params.length);

                if(params.length > 0){
                    return urlbase + '?' + params.join('&');
                } else {
                    return urlbase;
                }
            }
        } else {
            //no params found, return url unchanged
            return url;
        }
    }

    // function that applies filter to an url parameters and redirects the page to the new url if necessary
    self.redirectPage = function(window, document, prefixes, isWhitelist){
        var oldUrl = document.location.href;
        var newUrl = self.removeParamsFromUrl(prefixes,oldUrl, isWhitelist);

        if(oldUrl != newUrl){
            window.history.pushState('', document.title, newUrl);
        }
    }
}