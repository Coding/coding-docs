/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var SearchBox = require('../components/SearchBox/SearchBox.react');
var SearchAction = require("../actions/Search.action");
var SearchStore = require("../stores/Search.store");
var Pager = require("../components/Pager/Pager.react");
var PagerStore = require("../stores/Pager.store");
var PagerAction = require("../actions/Pager.action");
var jQuery = require("jquery");
var QueryString = require('query-string');
var SearchApp = React.createClass({


    getDefaultProps: function () {
        return {
            totalPage: 10
        }
    },
    getInitialState: function () {
        return {
            q: "",
            result: SearchStore.getList(),
            page: 1
        }
    },
    componentWillMount: function () {
        var parsed = QueryString.parse(location.search);
        jQuery("#search-form input[name=q]").val(parsed.q);
        this.setState({
            q: parsed.q || "",
            page: parsed.page || 1
        });
    },
    componentDidMount: function () {
        SearchAction.loadSearch({q: this.state.q, page: this.state.page});
        SearchStore.addChangeListener(this._onChange);
        PagerStore.addChangeListener(this._onPagerChange);
    },
    componentWillUnmount: function () {
        SearchStore.removeChangeListener(this._onChange);
        PagerStore.removeChangeListener(this._onPagerChange);
    },

    /**
     * @return {object}
     */
    render: function () {
        var result = this.state.result || [];
        var totalPage = this.state.result.totalPage || 0;
        var items = ( result && result.list ) || [];
        var noticeContent = "";
        if (this.state.q) {
            noticeContent = (
                <div className="content-note">
                    “{this.state.q}”的搜索结果
                </div>
            );
        } else {
            noticeContent = (
                <div className="content-note">
                    请输入搜索关键词
                </div>
            );
        }
        return (
            <div>
                {noticeContent}
                <SearchBox items={items}/>

                <div>
                    <Pager page={this.state.page} totalPage={totalPage} count={5}/>
                </div>
            </div>
        );
    },
    _onChange: function () {
        var result = SearchStore.getList();
        this.setState({
            result: result,
            page: result.page
        });
    },
    _onPagerChange: function () {
        var page = PagerStore.getPage();
        this.setState({page: page});
        var q = this.state.q;
        setTimeout(function () {
            SearchAction.loadSearch({q: q, page: page});
        }, 0)
    }
});

React.render(<SearchApp />, document.getElementById('search-app'));