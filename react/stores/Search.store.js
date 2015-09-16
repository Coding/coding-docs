/**
 * Created by kin on 15/8/13.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var objectAssign = require('object.assign');
var Api = require('../apis/Api.api');
var Events = require('events');
var EventEmitter = Events.EventEmitter
var CHANGE_EVENT = 'change';

var _store = {
    tab: "documents",
    result: {},
    list: []
};


var loadSearch = function (params) {
    new Api.get("http://127.0.0.1:4000/help/test/data.json", params, function (result) {
        if (result.code == 0) {
            _store.result = result.data || {};
            _store.list = _store.result[_store.tab];
            SearchStore.emit(CHANGE_EVENT);
        }
    });
};

var changeSearch = function (tab) {
    _store.tab = tab;
    _store.list = _store.result && _store.result[tab];
    SearchStore.emit(CHANGE_EVENT);
}

var SearchStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getList: function () {
        return _store.list;
    }
});

AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
        case Constants.LOAD_SEARCH:
            loadSearch(payload.params || "");
            break;
        case Constants.CHANGE_SEARCH:
            changeSearch(payload.tab || "");
            break;
        default:
            return true;
    }
});

module.exports = SearchStore;