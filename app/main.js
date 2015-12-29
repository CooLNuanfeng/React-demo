require('./sass/style.scss');
var ReactDOM = require('react-dom');
var React = require('react');
var Hello = require('./js/hello');

ReactDOM.render(<Hello name="World!" />,document.getElementById('example'));