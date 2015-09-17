/**
 * Created by kin on 15/9/12.
 */

var React = require('react');
var Moment = require("moment");
var SearchItem = React.createClass({
    formatType: function (type) {
        var types = {
            0: "文档",
            1: "反馈"
        }
        return types[type];
    },
    render: function () {
        var item = this.props.item;
        var type = this.formatType(item.type);
        var time = Moment(item.created_at || new Date().getTime()).format('YYYY MM DD');
        return (
            <article className="search-item">
                <figure>
                    <span className="type doc">{type}</span>
                </figure>
                <div className="detail">
                    <h3><a href={item.link} dangerouslySetInnerHTML={{__html:item.title}}></a></h3>

                    <div className="meta">
                        <span><a href={item.author_home}>{item.author_name}</a></span>
                        <span><i className="fa fa-clock-o"></i>{time}</span>
                    </div>
                </div>
            </article>
        );
    }
});


module.exports = SearchItem;