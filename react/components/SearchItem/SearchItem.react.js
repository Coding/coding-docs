/**
 * Created by kin on 15/9/12.
 */

var React = require('react/addons');
var Moment = require("moment");
var EllipsisText = require("../EllipsisText/EllipsisText.react");
var SearchItem = React.createClass({
    formatType: function (type) {
        var types = {
            0: "文档",
            1: "反馈"
        }
        return types[type];
    },
    render: function () {
        var cx = React.addons.classSet;
        var item = this.props.item;
        var typeClass = cx({
            'type doc': item.type == 0,
            'type feedback': item.type == 1
        });
        var type = this.formatType(item.type);
        var time = Moment(item.created_at || new Date().getTime()).format('YYYY-MM-DD');
        if (item.comment_count >= 0) {
            var replayContent = (item.comment_count || 0) + "条回应";
        }
        return (
            <article className="search-item">
                <figure>
                    <span className={typeClass}>{type}</span>
                </figure>
                <div className="detail">
                    <h3 title={item.title}><a href={item.link}
                                              dangerouslySetInnerHTML={{__html:item.title}}></a></h3>
                    <EllipsisText className="hit-content" text={item.content} length={140}></EllipsisText>

                    <div className="meta">
                        <span className="meta-label"><a href={item.author_home}
                                                        title={item.author_name}>{item.author_name}</a></span>
                        <span className="meta-label"><i className="fa fa-clock-o"></i>{time}</span>
                        <span className="meta-label">{replayContent}</span>
                    </div>
                </div>
            </article>
        );
    }
});


module.exports = SearchItem;