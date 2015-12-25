var NodesList = React.createClass({
	render: function() {
		return (
			<div>
				<ol>
					{
						React.Children.map(this.props.children, function(child){
				          return <li>{child}</li>;
				        })
					}
				</ol>
				<Hello name="World!"/>
				<Input/>
			</div>
		);
	}
});

var Hello = React.createClass({
	getInitialState: function() {
	  return {
	    color:  '#f60',
	  };
	},
	componentDidMount: function() {
		this.timer = setInterval(function(){
			var color = '#'+(Math.random()*0xffffff<<0).toString(16);
			this.setState({
				color: color 
			});
		}.bind(this), 300);
	},
	render: function() {
		return (
			<h1 style={{color:this.state.color}}>Hello {this.props.name}</h1>
		);
	}
});

var Input = React.createClass({
	getInitialState: function() {
	  return {
	    value: 'input text' ,
	  };
	},
	inputText : function(event){
		this.setState({
			value:  event.target.value
		});
	},
	blurInput : function(){
		this.refs.myInput.value = 'input text';
	},
	render: function() {
		return (
			<div>
				<input type="text" value={this.state.value} ref="myInput" onInput={this.inputText} onBlur={this.blurInput}/>
				<p>{this.state.value}</p>
			</div>
		);
	}
});


ReactDOM.render(
  <NodesList>
    <span>hello</span>
    <span>world</span>
  </NodesList>,
  document.body
);