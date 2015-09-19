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
    loading: false
};


var LoadingStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getLoading: function () {
        return _store.loading;
    },

    doLoading: function () {
        _store.loading = true;
        this.emit(CHANGE_EVENT);
    },

    doLoaded: function () {
        _store.loading = false;
        this.emit(CHANGE_EVENT);
    }
});

module.exports = LoadingStore;