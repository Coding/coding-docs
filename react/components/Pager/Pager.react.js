/**
 * Created by kin on 15/9/12.
 */

var React = require('react/addons');
var PagerAction = require("../../actions/Pager.action");
var Loading = React.createClass({
    getInitialState: function () {
        return {
            pagers: []
        }
    },
    paging: function () {
        var pagers = [];
        var prePage = 1;
        var nextPage = 2;
        var beginIndex = 1;
        var page = this.props.page || 1;
        var pageTotal = this.props.pageTotal || 0;
        var endIndex = this.props.pageTotal || 0;
        if (page <= pageTotal) {
            prePage = page - 1;
            nextPage = page + 1;
            if (page > Math.floor(count / 2)) {
                beginIndex = page - Math.floor(count / 2);
            }
            endIndex = beginIndex + count + 1;
            if (endIndex > pageTotal) {
                endIndex = pageTotal;
            }
        }
        if (beginIndex > 1) {
            pagers.push({no: 1});
        }
        for (var i = beginIndex; i < endIndex; i++) {
            pagers.push({no: i});
        }
        if (endIndex < pageTotal) {
            pagers.push({no: pageTotal});
        } else if (endIndex > 0) {
            pagers.push({no: endIndex});
        }
        return pagers;
    },
    go: function (no) {
        PagerAction.go(no);
    },
    goFirst: function () {
        PagerAction.go(1);
    },
    goLast: function () {
        PagerAction.go(this.props.pageTotal);
    },
    render: function () {
        var pagers = this.paging() || [];
        var pagerContent = pagers.map(function (p, index) {
            var cx = react.addons.classSet;
            var clazz = cx({
                "active": p.no == this.props.page
            });
            return (
                <li className={clazz}>
                    <a href="javascript:void(0)" onClick={this.go.bind(this,p.no)}>{p.no}</a>
                </li>
            )
        });
        return (
            <div className="pager">
                <ul className="paging pagination">
                    <li><a href="javascript:void(0)" onClick={this.goFirst}>&laquo;</a></li>
                    {pagerContent}
                    <li><a href="javascript:void(0)" onClick={this.goLast}>&raquo;</a></li>
                </ul>
            </div>
        );
    }
});


module.exports = Loading;