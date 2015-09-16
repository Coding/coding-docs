/**
 * Created by kin on 15/8/15.
 */

var Request = require('request');
var Api = {
    get: function () {
        var url, params = {}, success = undefined, error = undefined;
        switch (arguments.length) {
            case 0:
                throw new Error("Http get request must give url parameter")
                break;
            case 1:
                url = arguments[0];
                break;
            case 2:
                url = arguments[0];
                params = arguments[1];
                break;
            case 3:
                url = arguments[0];
                params = arguments[1];
                success = arguments[2];
                break;
            case 4:
                url = arguments[0];
                params = arguments[1];
                success = arguments[2];
                error = arguments[3];
                break;
        }
        url = Api.sliceURL(url, params);
        Request
            .get(url.url, url.params, function (err, response, body) {
                if (err) {
                    error && error(err);
                } else {
                    if (response.statusCode == 200) {
                        success && success(eval("(" + body + ")"));
                    }
                }
            });
    },


    sliceURL: function (url, params) {
        var newParams = {};
        for (var key in params) {
            if (url.indexOf("/:" + key) > 0) {
                url = url.replace("/:" + key, "/" + params[key]);
            } else {
                newParams[key] = params[key];
            }
        }
        return {
            url: url,
            params: newParams
        };
    }
}

module.exports = Api;
