import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import MainGrid from './MainGrid';
import './Navbar.css';
import SignIn from '../Components/SignIn';
import 'tachyons';
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
function Navbar({onRouteChange}) {
	const [menuOpen, setMenuOpen]=useState(false)
  return (
 <main style={{width: '100%'}}>
<div className="menu" onClick={()=>{
	setMenuOpen(!menuOpen);
}}>
<span></span>
<span></span>
<span></span>
</div>

<ul className= {menuOpen ? "open" : ""} style={{zIndex: 550}}>
	
	<li><a onClick={()=>onRouteChange('HomePage')}  href=""><NavLink to="/Home">Home</NavLink></a></li>
	<li>
	     <div className="dropdown" style={{zIndex: 550}}>
	     
	     <a href=""><NavLink to="/About Us">About Us</NavLink></a>
	      <div className="dropdownlist">
	     <li><a className="Listdown" href=""><NavLink to="/About Us/Who We are">Who We are</NavLink></a></li>
	     <li><a className="Listdown" href=""><NavLink to="/About Us/Vision, Mission & Values">Vision, Mission & Values</NavLink></a></li>
	     <li><a className="Listdown" href=""><NavLink to="/About Us/Where We work">Where We work</NavLink></a></li>
	     <li><a className="Listdown" onClick={()=>onRouteChange('HomePage')}href=""><NavLink to="/About Us/Our Approach">Our Approach</NavLink></a></li>
	     <li><a className="Listdown" onClick= {() =>onRouteChange('OurTeam')}><NavLink to="/About Us/Our Team">Our Team</NavLink></a></li>
	     
	     </div>
	     </div>
	</li>
	
	<li>
	     <div className="dropdown" style={{zIndex: 550}}>
	     <a href=""><NavLink to="/Our Work">Our Work</NavLink></a>
	      <div className="dropdownlist">
	     <li><a className="Listdown" onClick={()=>onRouteChange('Whowe')} href=""><NavLink to="/Our Work/Gender Equality and Women's">Gender Equality and Women's Rights</NavLink></a></li>
	     <li><a className="Listdown" href=""><NavLink to="/Our Work/Peace Building and Access to Justice">Peace Building and Access to Justice</NavLink></a></li>
	     <li><a className="Listdown" href=""><NavLink to="/Our Work/Economic Empowernent and Women Business Enhancement">Economic Empowernent and Women Business Enhancement</NavLink></a></li>
	      <li><a className="Listdown" href=""><NavLink to="/Our Work/Leadership and Institutional Development">Leadership and Institutional Development</NavLink></a></li>
	      <li><a className="Listdown" href=""><NavLink to="/Our Work/Health: HIV/AIDs and SRHR">Health: HIV/AIDs and SRHR</NavLink></a></li>
	     <li><a className="Listdown" href=""><NavLink to="/Our Work/Advocacy and Social Research">Advocacy and Social Research</NavLink></a></li>

	     </div>
	     </div>
	</li>   
	 
	
	<li><a href=""><NavLink to="/Our Impact">Our Impact</NavLink></a></li>
	<li>
	   <div className="dropdown" style={{zIndex: 550}}>
	   <a className="GetInvolved" href=""><NavLink to="/Get Involved">Get Involved</NavLink></a>
	     <div className="dropdownlist">
	     <li><a className="Listdown" href=""><NavLink to="/Get Involved/Careers">Careers</NavLink></a></li>
	     <li><a className="Listdown" href=""><NavLink to="/Get Involved/Internship">Internship</NavLink></a></li>
	     <li><a className="Listdown" href=""><NavLink to="/Get Involved/Volunteer With Us">Volunteer With Us</NavLink></a></li>
	   </div>
	   </div>
	</li>
	<li><a href=""><NavLink to="/Contact Us">Contact Us</NavLink></a></li>
	<div className="notdropdown" style={{zIndex: 550}}>
	

	
	<li ><a onClick={()=>onRouteChange('Register')}><NavLink to="/Sign Up">Sign Up</NavLink></a></li>
	<li><a onClick={()=>onRouteChange('SignIn')}><NavLink to="/Staff Portal">Staff Porta</NavLink></a></li>	
	<button  className="buttonDonate grow pointer "><a onClick={()=>onRouteChange('SignIn')}>Donate</a></button>
	</div>
</ul>
</main>

  );
}
export default Navbar;