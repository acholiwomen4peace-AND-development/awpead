import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
/*import 'tachyons';*/
function Header({ onRouteChange }) {
  return (
  <div className="Header" style={{position: 'relative', zIndex: 300}}>

	    <nav className="SignIn SignInHeader" style={{position: 'relative', zIndex: 400, display: 'flex', justifyContent: 'flex-end', width: '100%', height: 'auto', margin: '0px 0px 0px 0px'}}>
	    <p onClick={() =>onRouteChange('ChangePassword')}className='f5 pa3 link dim black underline pointer '> Change Password </p>
	    <p onClick={() =>onRouteChange('SignIn')}className='f5 pa3 link dim black underline pointer '> Sign Out </p>
	    </nav>
	</div>

  );
}
export default Header;