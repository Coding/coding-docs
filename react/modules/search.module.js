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
var SearchApp = React.createClass({

    getInitialState: function () {
        return {
            result: SearchStore.getList(),
            page: 1
        }
    },
    componentDidMount: function () {
        SearchAction.loadSearch({key: "", page: 1});
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
        this.props.totalPage = 10;
        var items = ( result && result.list ) || [];
        return (
            <div>
                <SearchBox items={items}/>

                <div>
                    <Pager page={this.state.page} totalPage={this.props.totalPage} count={5}/>
                </div>
            </div>
        );
    },
    _onChange: function () {
        this.setState({
            result: SearchStore.getList()
        })
    },
    _onPagerChange: function () {
        var page = PagerStore.getPage();
        this.setState({page: page});
        setTimeout(function () {
            SearchAction.loadSearch({key: "", page: page});
        }, 1)
    }
});

React.render(<SearchApp />, document.getElementById('search-app'));