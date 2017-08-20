var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
 render: function () {
    return (
        <div>
            <Nav/>
            <div className='container'>
                <h1>Main Component</h1>
                {this.props.children}
            </div>
        </div>
    );
  }
});



module.exports = Main;