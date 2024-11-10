import React, {Component} from 'react';
import Copyright from './Copyright.JPG';
import ButtonMailto from './ButtonMailto';

import './Footer1.css';
import logo from './logo.jpg';
/*import ReactDOM from 'react-dom/client';*/

import 'tachyons';
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";

import {FacebookShareCount, EmailShareButton, FacebookIcon, FacebookShareButton,EmailIcon, 
	WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, 
	LineIcon, LineShareButton} from 'react-share';
import {ShareSocial} from 'react-share-social';

function Footer1({onRouteChange}){
			
return (
<div className="FHeight">
<div className="Footer-container1">

<div className="row">
<div className="coln w-100">
	
	<div className= "FooterLogo  w-2">
  		<img style={{ 'border-radius': '2px', float:'left', width: '50px', Height: '25px'}} src={logo} alt='Awpead logo' />
	</div>
	<div>
	
	
	<h5 className="w-5"><a onClick={()=>{onRouteChange('HomePage')}}><NavLink to="/Home">Home</NavLink></a></h5>

	    <div className="dropdown w-10" style={{zIndex: 450}}>     
		<h5><a href=""><NavLink to="/About Us">About Us</NavLink></a></h5>
	      <div className="dropdownlist">
	     <p><a className="Listdown" href=""><NavLink to="/About Us/Who We are">Who We are</NavLink></a></p>
	     <p><a className="Listdown" href=""><NavLink to="/About Us/Vision, Mission & Values">Vision, Mission & Values</NavLink></a></p>
	     <p><a className="Listdown" href=""><NavLink to="/About Us/Where We work">Where We work</NavLink></a></p>
	     <p><a className="Listdown" onClick= {() =>onRouteChange('SignIn')}><NavLink to="/About Us/Our Approach">Our Approach</NavLink></a></p>
	     <p><a className="Listdown" onClick= {() =>onRouteChange('OurTeam')}><NavLink to="/About Us/Our Team">Our Team</NavLink></a></p>
	     </div>
	     </div>
	
	
	
	     <div className="dropdown w-10" style={{zIndex: 400}}>
	    <h5> <a href=""><NavLink to="/Our Work">Our Work</NavLink></a></h5>
	     <div className="dropdownlist">
	     <p><a className="Listdown" onClick={()=>onRouteChange('Whowe')} href=""><NavLink to="/Our Work/Gender Equality and Women's">Gender Equality and Women's Rights</NavLink></a></p>
	     <p><a className="Listdown" href=""><NavLink to="/Our Work/Peace Building and Access to Justice">Peace Building and Access to Justice</NavLink></a></p>
	     <p><a className="Listdown" href=""><NavLink to="/Our Work/Economic Empowernent and Women Business Enhancement">Economic Empowernent and Women Business Enhancement</NavLink></a></p>
	      <p><a className="Listdown" href=""><NavLink to="/Our Work/Leadership and Institutional Development">Leadership and Institutional Development</NavLink></a></p>
	      <p><a className="Listdown" href=""><NavLink to="/Our Work/Health: HIV/AIDs and SRHR">Health: HIV/AIDs and SRHR</NavLink></a></p>
	     <p><a className="Listdown" href=""><NavLink to="/Our Work/Advocacy and Social Research">Advocacy and Social Research</NavLink></a></p>
	     </div>
	     </div>
	   
	
	<h5 className="w-10"><a href=""><NavLink to="/Our Impact">Our Impact</NavLink></a></h5>

	
	   <div className="dropdown w-12" style={{zIndex: 550}}>
	   <h5><a className="GetInvolved" href=""><NavLink to="/Get Involved">Get Involved</NavLink></a></h5>
	     <div className="dropdownlist">
	     <p><a className="Listdown" href=""><NavLink to="/Get Involved/Careers">Careers</NavLink></a></p>
	     <p><a className="Listdown" href=""><NavLink to="/Get Involved/Internship">Internship</NavLink></a></p>
	     <p><a className="Listdown" href=""><NavLink to="/Get Involved/Volunteer With Us">Volunteer With Us</NavLink></a></p>
	   </div>
	   </div>


	
	<h5 className="w-10"><a href=""><NavLink to="/Contact Us">Contact Us</NavLink></a></h5>
	
	

	
	<h5 className="w-10"><a onClick={()=>onRouteChange('Register')}><NavLink to="/Sign Up">Sign Up</NavLink></a></h5>
	<h5 className="w-10"><a onClick={()=>onRouteChange('SignIn')}><NavLink to="/Staff Portal">Staff Portal</NavLink></a></h5>	
	
	</div>
	</div>


<div className="row">


<div className="column phover w-40">
<div className="Hh5">
<h5>Physical Address</h5>
</div>
<div>
<p><strong>Head Office:</strong> Patongo Town Council</p>
<p>Patongo Lira Road</p>
<p>P.O. Box - Agago (Northern Uganda).</p>
</div>
<span></span>
<p><strong>Coordination Office: </strong>Kitgum Municipal Council</p>
<p>Bardege Pandwong Division, Kitgum-Gulu Road</p>
<p>P.O Box 36 Kitgum (U).</p>
</div>


<div className="column phover w-40">
<div className="Hh5">
<h5>Contact Information</h5>
</div>
<p>Tel: 0782 888 455 / 0751 444 039</p>
<p>Email: acholiwomen4peaced@gmail.com</p>
<p className="Backcolor"><a href="https://acholiwomen4peace-and-development.github.io/awpead/">https://acholiwomen4peace-and-development.github.io/awpead/</a></p>
</div>


<div className="column w-40">
<div className="Hh5">
<h5>Partners & Supporters</h5>
</div>


<div className="row">
<div className="column w-40">
<p className="Backcolor"><a href="https://www.uweal.co.ug">UWEAL [https://www.uweal.co.ug]</a></p>
<p className="Backcolor"><a href="https://librefoundation.nl/en">LIBREFOUNDATION [https://librefoundation.nl/en]</a></p>
<p className="Backcolor"><a href="https://nawouganda.ug">NAWOU [https://nawouganda.ug]</a></p>
<p className="Backcolor"><a href="https://www.uwonet.or.ug">UWONET [https://www.uwonet.or.ug]</a></p>
<p className="Backcolor"><a href="https://www.health.go.ug">GOU [https://www.health.go.ug]</a></p>
</div>

<div className="column phover w-40">
<div className="Hh5">
<h5 className="connectus">Connect with Us</h5>
</div>
<span></span>
<ButtonMailto 
			label={<EmailIcon size={25} round={true}/>}  mailto="mailto:acholiwomen4peaced@gmail.com" style={{cursor: 'pointer'}}/>
		  
		  	<span></span>
		  		<FacebookIcon size={25} round={true} onClick={()=>onRouteChange('FacebookLoginFooter')} style={{cursor: 'pointer'}}/>
		
		 <span></span>
		<a href="https://wa.me/256782005826"><WhatsappIcon size={25} round={true} style={{cursor: 'pointer'}}/></a> 
</div>

</div>
</div>
</div>



	</div>
</div>
	
	
<div className="Footer-container2 CopyR">
		<div className="flex-item-left">
		<p> <img src={Copyright} alt="Copy rights:" style={{width: '20px', height: '20px'}}/>Copy Rights Acholi Women for Peace and Development<span>|</span>2024 All Rights Reserved </p>
		</div>


</div>	
</div>
	
	
		);
	}

export default Footer1;