import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../Components/SignIn';
import MainGrid from './MainGrid';
import SearchBox2 from './SearchBox2';
import Navbar from './Navbar';
import './Header1.css';
import searchicon from './searchicon.jpg';
import {Tilt} from 'react-tilt';
import logo from './logo.jpg';
/*import 'tachyons';*/
function Header1({ onRouteChange, searchChange, onSearchChange }) {
  return (
  	
	  <nav style={{display: 'flex', /*justifyContent: 'flex-end',*//* background:'white',*/ width: '100%', font: 'fantansy', margin: '0px 0px 0px 0px'}}>
  		<Tilt className="Tilt br2 shadow-2 options={{max: 55}} style={{position: 'relative', top:0, zIndex: 560, height:'25px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{float:'left', margin:'0', width: '150px', Height: '25px'}} src={logo} alt='logo' />
  		</div> 
  		</Tilt>		
  		
  		<Navbar onRouteChange={onRouteChange} style={{zIndex: 500}} />

  		<Tilt className="Tilt br2 shadow-2 SBox2" options={{max: 5}} style={{position: 'relative', padding: '0px','margin-top':'20px', 'margin-bottom':'20px', 'margin-right':'0px', 'margin-left': '20px', zIndex: 500, height:'30px', width: '40px'}}>
  		<div className="Tilt-inner">
  		<img onClick={()=>
  			onRouteChange('SearchBox2')
  			
  		}style={{zIndex: 500, padding:0, margin:'0px', width: '40px', Height: '40px'}} src={searchicon} alt='searchicon' />
  		</div> 
  		</Tilt>	
  		
	    </nav>


  );
}
export default Header1;