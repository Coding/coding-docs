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

var SearchAction = {

    /**
     * @param  {string} text
     */
    loadSearch: function (params) {
        AppDispatcher.dispatch({
            actionType: Constants.LOAD_SEARCH,
            params: params
        });
    },
    changeSearch: function (tab) {
        AppDispatcher.dispatch({
            actionType: Constants.CHANGE_SEARCH,
            tab: tab
        });
    }

}
module.exports = SearchAction;