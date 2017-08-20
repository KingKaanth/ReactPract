var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var About = require('About');
var Services = require('Services');
var SubcribeForm = require('SubcribeForm');

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            {<IndexRoute component={SubcribeForm}/>}
        </Route>
    </Router>,
  document.getElementById('app')
);
