/**
 * Created by kin on 15/8/13.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var objectAssign = require('object.assign');
var Events = require('events');
var EventEmitter = Events.EventEmitter
var CHANGE_EVENT = 'change';

var _store = {
    page: []
};

var changePager = function (page) {
    _store.page = page;
    PagerStore.emit(CHANGE_EVENT);
};

var PagerStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getPage: function () {
        return _store.page;
    }
});

AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
        case Constants.PAGER_CHANGE:
            changePager(payload.page || 1);
            break;
        default:
            return true;
    }
});

module.exports = PagerStore;