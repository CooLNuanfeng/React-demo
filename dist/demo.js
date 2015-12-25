var NodesList = React.createClass({
	displayName: 'NodesList',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'ol',
				null,
				React.Children.map(this.props.children, function (child) {
					return React.createElement(
						'li',
						null,
						child
					);
				})
			),
			React.createElement(Hello, { name: 'World!' }),
			React.createElement(Input, null)
		);
	}
});

var Hello = React.createClass({
	displayName: 'Hello',

	getInitialState: function () {
		return {
			color: '#f60'
		};
	},
	componentDidMount: function () {
		this.timer = setInterval((function () {
			var color = '#' + (Math.random() * 0xffffff << 0).toString(16);
			this.setState({
				color: color
			});
		}).bind(this), 300);
	},
	render: function () {
		return React.createElement(
			'h1',
			{ style: { color: this.state.color } },
			'Hello ',
			this.props.name
		);
	}
});

var Input = React.createClass({
	displayName: 'Input',

	getInitialState: function () {
		return {
			value: 'input text'
		};
	},
	inputText: function (event) {
		this.setState({
			value: event.target.value
		});
	},
	blurInput: function () {
		this.refs.myInput.value = 'input text';
	},
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement('input', { type: 'text', value: this.state.value, ref: 'myInput', onInput: this.inputText, onBlur: this.blurInput }),
			React.createElement(
				'p',
				null,
				this.state.value
			)
		);
	}
});

ReactDOM.render(React.createElement(
	NodesList,
	null,
	React.createElement(
		'span',
		null,
		'hello'
	),
	React.createElement(
		'span',
		null,
		'world'
	)
), document.body);