/**
 * Created by kin on 15/8/15.
 */

var Request = require('request');
var jQuery = require('jquery');
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
        jQuery.ajax({
            url: url.url + "?" + Api.queryString(url.params),
            type: "GET",
            success: function (data) {
                success && success(data);
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
    },

    queryString: function (params) {
        var str = "";
        var i = 0;
        for (var key in params) {
            if (key) {
                if (i > 0) {
                    str += "&";
                }
                str += key + "=" + encodeURIComponent(params[key]);
            }
            i++;
        }
        return str;
    }
}

module.exports = Api;
