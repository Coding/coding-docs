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
        if (items) {
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
        } else if (!items && !key) {
            itemsContent = (
                <div className="search-notice">请输入关键词搜索</div>
            );
        } else if (!items && key) {
            itemsContent = (
                <div className="search-notice"></div>
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