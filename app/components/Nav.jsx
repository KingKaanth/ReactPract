var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
    render : function(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to='/' className="navbar-brand">React Pract</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className=""><Link to='/' activeClassName="active">Home</Link></li>
                            <li><Link to='/about' activeClassName="active">About</Link></li>
                            <li><Link to='/services' activeClassName="active">Services</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;