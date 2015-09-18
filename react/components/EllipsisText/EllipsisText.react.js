/**
 * Created by kin on 15/9/12.
 */

var React = require('react/addons');
var HtmlEllipsis = require('html-ellipsis');
var EllipsisText = React.createClass({
    getInitialState: function () {
        return {}
    },
    render: function () {
        var className = "ellipsis-text " + (this.props.className || "")
        var text = ( this.props.text || "").replace(/\\n/g, " ");
        text = HtmlEllipsis(text || "", this.props.length || 0, false);
        return (
            <div className={className} dangerouslySetInnerHTML={{__html:text}}></div>
        );
    }
});


module.exports = EllipsisText;