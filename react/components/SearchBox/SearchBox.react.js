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
            tab: 'documents'
        }
    },
    changeDocuments(){
        this.setState({tab: "documents"})
        SearchAction.changeSearch("documents");
    },
    changeProjectTopics(){
        this.setState({tab: "project_topics"})
        SearchAction.changeSearch("project_topics");
    },
    render: function () {
        var cx = React.addons.classSet;
        var documentClass = cx({
            "active": this.state.tab == "documents"
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