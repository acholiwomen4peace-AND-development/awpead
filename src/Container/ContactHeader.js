import React from 'react';
import './ContactHeader.css';
import ButtonMailto from './ButtonMailto';
import Email from './Email.JPG'
import Email2 from './Email2.JPG'
import Cellphone from './Cellphone.JPG';
import facebook from './facebook.JPG';
import FacebookLogin from './FacebookLogin';
import Whatsapp from './Whatsapp.png';

function ContactHeader(onRouteChange){
return(

	<div className="flex-container">

	<div className="flex-item-left">	
		    <h6>
			Agago - Northern Uganda <span></span> <img src={Cellphone} alt="Email:" style={{width: '15px', height: '15px'}}/>  +256 782 888 455/ +256 751 444 039
			<span></span> 

			<img src={Email2} alt="Email:" style={{width: '10px', height: '10px', 'margin-top': '5px', cursor: 'cursor'}}/> 
			
			<ButtonMailto 
			label={" acholiwomen4peaced@gmail.com"} mailto="mailto:acholiwomen4peaced@gmail.com" />
			
			</h6>
		</div>
	    	<div className="flex-item-right">
		   <h6>	
				<ButtonMailto 
			label={<img src={Email2} alt="Email Us" style={{width: '10px', height: '10px', 'margin-top': '5px'}}/>}  mailto="mailto:acholiwomen4peaced@gmail.com" />
				<span></span>
				<img onClick={()=>onRouteChange('FacebookLogin')}src={facebook} alt="facebook" style={{width: '10px', height: '10px'}}/>
				<span></span>
				<a href="https://wa.me/256782005825"> <img src={Whatsapp} alt="Whatsapp" style={{width: '15px', height: '10px', 'margin-top': '5px', cursor: 'pointer'}}/></a> 

			</h6>
		</div>
	</div>	
);
}
export default ContactHeader;