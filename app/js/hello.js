var React = require('react');
var Hello = React.createClass({

	render: function() {
		return (
			<div className="say">Hello,{this.props.name}</div>
		);
	}

});

module.exports = Hello;