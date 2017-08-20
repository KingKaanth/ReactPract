var React = require('react');
var Message = require('Message');

var SubcribeForm = React.createClass({
    getInitialState : function(){
        return {
            emailId: "",
            response: ""
        }
    },
    createPost :function (e){
        e.preventDefault();
        var emailId = this.refs.inputEmail.value;
        if(emailId.length > 0){
            this.refs.postForm.reset();
            this.setState({
                emailId: emailId,
                response: "thankyou for subscribing!"
            });
        }
    },
    render : function (){
        var {response,emailId} = this.state;
        return(
            <div className='row'>
                <div className='col-md-4'>
                    <form className="form-signin" ref="postForm" onSubmit={this.createPost}>
                        <h3 className="form-signin-heading">Subcribe Here</h3>
                        <input type="email" ref="inputEmail" className="form-control" placeholder="Email address" required autofocus /><br/>
                        <button className="btn btn-sm btn-primary btn-block" type="submit">Subcribe</button>
                    </form>
                    <Message email={emailId} res={response}/> 
                </div>
            </div>
        );
    }
});

module.exports = SubcribeForm;