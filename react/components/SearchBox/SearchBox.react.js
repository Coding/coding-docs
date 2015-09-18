/**
 * Created by kin on 15/9/12.
 */

var React = require('react/addons');
var SearchItem = require("../SearchItem/SearchItem.react");
var SearchAction = require("../../actions/Search.action");
var Loading = require("../Loading/Loading.react");
var SearchBox = React.createClass({
    getInitialState: function () {
        return {
            tab: 'help_documents'
        }
    },
    changeDocuments(){
        this.setState({tab: "help_documents"})
        SearchAction.changeSearch("help_documents");
    },
    changeProjectTopics(){
        this.setState({tab: "project_topics"})
        SearchAction.changeSearch("project_topics");
    },
    render: function () {
        var cx = React.addons.classSet;
        var documentClass = cx({
            "active": this.state.tab == "help_documents"
        });
        var projectTopicClass = cx({
            "active": this.state.tab == "project_topics"
        });
        var items = this.props.items;
        var itemsContent = (<Loading/>);
        if (items && items.length > 0) {
            var listContent = items.map(function (item, index) {
                return (
                    <li>
                        <SearchItem item={item}/>
                    </li>
                );
            });

            itemsContent = (
                <ul className="search-list">
                    {listContent}
                </ul>
            )
        } else {
            itemsContent = (
                <div className="search-notice">没有搜索到相关结果</div>
            );
        }
        return (
            <div className="search-box">
                <div className="search-tabs">
                    <ul className="clearfix">
                        <li className={documentClass} onClick={this.changeDocuments}>文档</li>
                        <li className={projectTopicClass} onClick={this.changeProjectTopics}>提问</li>
                    </ul>
                </div>
                <div className="search-body">
                    {itemsContent}
                </div>
            </div>
        );
    }
});


module.exports = SearchBox;