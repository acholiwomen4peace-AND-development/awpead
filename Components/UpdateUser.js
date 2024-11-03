import React from 'react';
import ReactDOM from 'react-dom';
import './SignIn';

class UpdateUser extends React.Component{
	constructor(props){
		super(props);
		this.state ={
		name: "",
		email: "",
		pass: ""

		}
	}
onNameChange = (event) =>{
	this.setState({name: event.target.value})
}

onEmailChange =(event) =>{
	this.setState({email: event.target.value})
}
onPasswordChange =(event) =>{
	this.setState({pass: event.target.value})
}

onForgotPassword =({LoadUser}) =>{
	fetch('http://localhost:3003/UpdateUser',{
method: 'put',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify({
	name: this.state.name,
	email: this.state.email,
	pass: this.state.pass
})
}).then(response =>response.json())
	.then(data => {
		if(data.id) {
	this.props.LoadUser(data)
	this.props.onRouteChange('Home')
	alert('User profile Updated Successfully')
		}else{
	alert('Incorrect email address!')
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
			      <legend  className="f2 fw6 ph0 mh0">Change User Profile</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="text" 
			        name="name"  
			        id="name" 
			        onChange={this.onNameChange}
			        />
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" 
			        name="email-address"  
			        id="email-address" 
			        onChange={this.onEmailChange}
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">New Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password" 
			        onChange={this.onPasswordChange}
			        />
			      </div>
			    </fieldset>
			     <div className="lh-copy mt3">
			      <p onClick={this.onForgotPassword} className="f6 link dim black db pointer">Change Profile</p>
			    
			    </div>
			  </form>
			</main>
 </article>
    </div>
      );
  		}

	}
export default UpdateUser;
