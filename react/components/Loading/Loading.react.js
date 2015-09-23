/**
 * Created by kin on 15/9/12.
 */

var React = require('react/addons');
var LoadingStore = require("../../stores/Loading.store");
var Loading = React.createClass({
    getInitialState: function () {
        return {
            loading: false
        }
    },
    componentDidMount: function () {
        LoadingStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        LoadingStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var imageSize = this.props.imageSize || 24;
        var containerMargin = this.props.containerMargin || 40;
        var circlePadding = this.props.circlePadding || 16;
        var w = circlePadding;
        var containerStyle = {
            'width': (imageSize + w) + 'px',
            'height': (imageSize + w) + 'px',
            'margin': containerMargin + 'px ' + ' auto '
        };
        var loadingStyle = {
            'width': (imageSize + w) + 'px',
            'height': (imageSize + w) + 'px'
        };
        var loadingTextStyle = {
            'width': (imageSize + w) + 'px',
            'height': (imageSize + w) + 'px',
            'lineHeight': (imageSize + w) + 'px'
        };
        var hideStyle = {
            display: "none"
        };

        if (this.state.loading) {
            return (
                <div className="common-loading-container" style={containerStyle}>
                    <div className="common-loading common-coding icon monkey"
                         style={loadingStyle}></div>
                    <div className="common-loading-text"
                         style={loadingTextStyle}><img
                        src="/help/static/img/monkey_48_48_b.png" width={imageSize}
                        height={imageSize}/>
                    </div>
                </div>
            );
        }
        return (<i style={hideStyle}></i>);
    },
    _onChange: function () {
        var loading = LoadingStore.getLoading();
        this.setState({
            loading: loading
        });
    }
});


module.exports = Loading;