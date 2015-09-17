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
var Config = require("../configs/app.config.json")
var _store = {
    tab: "help_documents",
    result: {},
    list: []
};


var loadSearch = function (params) {
    new Api.get("/api/esearch/help", params, function (result) {
        if (result.code == 0) {
            _store.result = result.data || {};
            _store.result = convertResult(_store.result);
            _store.list = _store.result && _store.result[_store.tab];
            SearchStore.emit(CHANGE_EVENT);
        }
    });
};


var convertResult = function (result) {
    if (!result) {
        return {};
    }
    var defavlt = {
        "simpKeyword": "1",
        "list": [],
        "page": 1,
        "pageSize": 10,
        "totalPage": 0,
        "totalRow": 0
    };
    var docs = result['help_documents'] || defavlt;
    var topics = result['project_topics'] || defavlt;

    docs.list = (docs.list || []).map(function (item, index) {
        return {
            type: "文档",
            title: item.title,
            link: item.link,
            author_name: "coding",
            author_home: "https://coding.net/u/coding",
            created_at: item.created_at
        };
    });
    topics.list = (topics.list || []).map(function (item, index) {
        return {
            type: "反馈",
            title: item.title,
            link: item.project && item.project.project_path + "/" + item.id,
            author_name: item.owner && item.owner.name,
            author_home: item.owner && (Config.API_HOST + item.owner.path),
            created_at: item.created_at
        };
    });
    result['help_documents'] = docs;
    result['project_topics'] = topics;
    return result;
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