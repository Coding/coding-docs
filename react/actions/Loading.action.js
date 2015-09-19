/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */


var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var LoadingAction = {

    /**
     * @param  {string} text
     */
    loading: function () {
        setTimeout(function () {
            AppDispatcher.dispatch({
                actionType: Constants.LOADING
            });
        }, 0);
    },
    loaded: function () {
        setTimeout(function () {
            AppDispatcher.dispatch({
                actionType: Constants.LOADED
            });
        }, 0);
    }

}
module.exports = LoadingAction;