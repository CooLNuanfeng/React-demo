var HelloMessage = React.createClass({
	displayName: "HelloMessage",

	render: function () {
		return React.createElement(
			"h1",
			null,
			"Hello, ",
			this.props.name
		);
	}
});

ReactDOM.render(React.createElement(HelloMessage, { name: "blue" }), document.getElementById('example'));