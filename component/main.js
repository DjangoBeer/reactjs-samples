var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, world! I am a new Component!</h1>
        );
    }
});

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('example')
);