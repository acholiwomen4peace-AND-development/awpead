import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../Components/SignIn';
import MainGrid from './MainGrid';
import SearchBox2 from './SearchBox2';
import Navbar from './Navbar';
import './Header1.css';
import searchicon from './searchicon.jpg';
import {Tilt} from 'react-tilt';
import logo from './logo.jpg';

import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import './Navbar.css';
/*import 'tachyons';*/
function Header1({ onRouteChange, searchChange, onSearchChange }) {
  const [menuOpen, setMenuOpen]=useState(false)
  return (
<main style={{width: '100%'}}>


<nav className= {menuOpen ? "open" : ""} style={{display: 'flex', /*justifyContent: 'flex-end',*//* background:'white',*/ /*width: '100%', */font: 'fantansy'/*, margin: '0px 0px 0px 0px'*/}}>
<div className="menu" onClick={()=>{
  setMenuOpen(!menuOpen);
}}>
<span></span>
<span></span>
<span></span>
</div>
      <Tilt className="imglogo Tilt br2 shadow-2 options={{max: 55}} style={{position: 'relative', top:0, zIndex: 560, height:'25px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{float:'left', margin:'0', width: '150px', Height: '25px'}} src={logo} alt='logo' />
  		</div> 
  		</Tilt>		


  		
<ul  style={{zIndex: 550}}>

  <li><a onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('HomePage')}}  href=""><NavLink to="/Home">Home</NavLink></a></li>
 
  <li>
       <div className="dropdown" style={{zIndex: 550}}>
       
       <a href=""><NavLink to="/About Us">About Us</NavLink></a>
        <div className="dropdownlist">
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/About Us/Who We are">Who We are</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/About Us/Vision, Mission & Values">Vision, Mission & Values</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/About Us/Where We work">Where We work</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}href=""><NavLink to="/About Us/Our Approach">Our Approach</NavLink></a></li>
       <li><a className="Listdown" onClick= {() =>{setMenuOpen(!menuOpen);onRouteChange('OurTeam')}}><NavLink to="/About Us/Our Team">Our Team</NavLink></a></li>
       
       </div>
       </div>
  </li>
  
  <li>
       <div className="dropdown" style={{zIndex: 450}}>
       <a href=""><NavLink to="/Our Work">Our Work</NavLink></a>
        <div className="dropdownlist">
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Our Work/Gender Equality and Women's">Gender Equality and Women's Rights</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Our Work/Peace Building and Access to Justice">Peace Building and Access to Justice</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Our Work/Economic Empowernent and Women Business Enhancement">Economic Empowernent and Women Business Enhancement</NavLink></a></li>
        <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Our Work/Leadership and Institutional Development">Leadership and Institutional Development</NavLink></a></li>
        <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Our Work/Health: HIV/AIDs and SRHR">Health: HIV/AIDs and SRHR</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Our Work/Advocacy and Social Research">Advocacy and Social Research</NavLink></a></li>

       </div>
       </div>
  </li>   
   
  
  <li><a onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Our Impact">Our Impact</NavLink></a></li>
  <li>
     <div className="dropdown" style={{zIndex: 400}}>
     <a className="GetInvolved" href=""><NavLink to="/Get Involved">Get Involved</NavLink></a>
       <div className="dropdownlist">
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Get Involved/Careers">Careers</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Get Involved/Internship">Internship</NavLink></a></li>
       <li><a className="Listdown" onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Get Involved/Volunteer With Us">Volunteer With Us</NavLink></a></li>
     </div>
     </div>
  </li>
  <li><a onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Contact Us">Contact Us</NavLink></a></li>
  <div className=" Staffsection dropdown"  style={{zIndex: 400}}>
  

  
  <li ><a onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('Register')}}><NavLink to="/Sign Up">Sign Up</NavLink></a></li>
  <li><a onClick={()=>{setMenuOpen(!menuOpen);onRouteChange('SignIn')}}><NavLink to="/Staff Portal">Staff Portal</NavLink></a></li>  
  </div>
</ul>
  <button  className="buttonDonate grow pointer "><a onClick={()=>{
  setMenuOpen(!menuOpen);onRouteChange('SignIn')}}>Donate</a></button>





  		<Tilt className="imgsearchicon Tilt br2 shadow-2 SBox2" options={{max: 5}} style={{position: 'relative', padding: '0px','margin-top':'20px', 'margin-bottom':'20px', 'margin-right':'0px', 'margin-left': '20px', zIndex: 500, height:'30px', width: '40px'}}>
  		<div className="Tilt-inner">
  		<img onClick={()=>{
  setMenuOpen(!menuOpen);onRouteChange('SearchBox2')}
  			
  		}style={{zIndex: 500, padding:0, margin:'0px', width: '40px', Height: '40px'}} src={searchicon} alt='searchicon' />
  		</div> 
  		</Tilt>	
  		
	    </nav>
      </main>

  );
}
export default Header1;