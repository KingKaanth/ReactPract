var React = require('react');

var Message = React.createClass({
    render: function(){
        var {email,res} = this.props;
        return(
            <h3>{email} {res}</h3>
        );
    }
});

module.exports = Message;