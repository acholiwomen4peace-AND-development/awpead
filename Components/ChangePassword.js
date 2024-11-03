import React from 'react';
import ReactDOM from 'react-dom';
import './SignIn'

class ChangePassword extends React.Component{
	constructor(props){
		super(props);
		this.state ={
		email: "",
		newpass: "",
		oldpass: "",
		confirmpass: ""

		}
	}

onEmailChange =(event) =>{
	this.setState({email: event.target.value})
}
onNewPasswordChange =(event) =>{
	this.setState({newpass: event.target.value})
}
onOldPasswordChange =(event) =>{
	this.setState({oldpass: event.target.value})
}
onConfirmPasswordChange =(event) =>{
	this.setState({confirmpass: event.target.value})
}

onForgotPassword =({LoadUser}) =>{
	fetch('http://localhost:3003/ChangePassword',{
method: 'put',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify({
	email: this.state.email,
	newpass: this.state.newpass,
	oldpass: this.state.oldpass,
	confirmpass: this.state.confirmpass
})
}).then(response =>response.json())
	.then(data => {
		if(data.id) {
	this.props.LoadUser(data)
	this.props.onRouteChange('Home')
	alert('Password Change Successfully')
		}else{
	alert('Incorrect Password!')
		}
	});
}
render(){ 
		
  return (
    <div className="SignIn" method='post'>
  <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5  mw5 center">
			    <main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend  className="f2 fw6 ph0 mh0">Change Password</legend>
			      <div>
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" 
			        name="email-address"  
			        id="email-address" 
			        onChange={this.onEmailChange}
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Old Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="passwor" 
			        onChange={this.onOldPasswordChange}
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">New Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password" 
			        onChange={this.onNewPasswordChange}
			        />
			      </div>

			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm New Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="passw" 
			        onChange={this.onConfirmPasswordChange}
			        />
			      </div>
			    </fieldset>
			     <div className="lh-copy mt3">
			      <p onClick={this.onForgotPassword} className="f6 link dim black db pointer">Change Password</p>
			    
			    </div>
			  </form>
			</main>
 </article>
    </div>
      );
  		}

	}
export default ChangePassword;