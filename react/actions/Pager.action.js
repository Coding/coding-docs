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

var PagerAction = {

    /**
     * @param  {string} text
     */
    go: function (page) {
        AppDispatcher.dispatch({
            actionType: Constants.PAGER_CHANGE,
            page: page
        });
    }

}
module.exports = PagerAction;