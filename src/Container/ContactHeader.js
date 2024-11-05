import React, {Component} from 'react';
import './ContactHeader.css';
import ButtonMailto from './ButtonMailto';

import Cellphone from './Cellphone.JPG';

import FacebookLogin from './FacebookLogin';


import {FacebookShareCount, EmailShareButton, FacebookIcon, FacebookShareButton,EmailIcon, 
	WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, 
	LineIcon, LineShareButton} from 'react-share';


function ContactHeader({onRouteChange}){
return(

	<div className="flex-container">

	<div className="flex-item-left">	
		    <h6>
			Agago - Northern Uganda <span></span> <img src={Cellphone} alt="Email:" style={{width: '15px', height: '15px'}}/>  +256 782 888 455/ +256 751 444 039
			<span></span> 

			<EmailIcon size={32} round={true} style={{width: '15px', height: '15px', 'margin-top': '5px', cursor: 'cursor'}}/> 
			
			<ButtonMailto 
			label={" acholiwomen4peaced@gmail.com"} mailto="mailto:acholiwomen4peaced@gmail.com" />
			
			</h6>
		</div>
	    	<div className="flex-item-right">
		   <h6>	
				<ButtonMailto 
			label={<EmailIcon size={32} round={true} alt="Email Us" style={{width: '20px', height: '20px', 'margin-top': '5px', cursor: 'pointer'}}/>}  mailto="mailto:acholiwomen4peaced@gmail.com" />
				<span></span>
				<FacebookIcon size={32} round={true} onClick={()=>onRouteChange('FacebookLoginHeader')}  alt="facebook" style={{width: '20px', height: '20px', cursor: 'pointer'}}/>
				<span></span>
				<a href="https://wa.me/256782005826"> <WhatsappIcon size={32} round={true} alt="Whatsapp" style={{width: '20px', height: '20px', 'margin-top': '5px', cursor: 'pointer'}}/></a> 
			</h6>
		</div>
	</div>	
);
}
export default ContactHeader;