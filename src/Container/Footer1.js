import React, {Component} from 'react';
import Email2 from './Email2.JPG';
import Copyright from './Copyright.JPG';
import ButtonMailto from './ButtonMailto';
import facebook from './facebook.JPG';
import Whatsapp from './Whatsapp.png'
import './Footer1.css';
/*import ReactDOM from 'react-dom/client';*/

function Footer1(){
			
return (
	
	<div className="Footer-container">
		<div className="flex-item-left">
		<p> <img src={Copyright} alt="Copy rights:" style={{width: '20px', height: '20px'}}/> 2024 Acholi Women for Peace and Development. All Rights Reserved </p>
		</div>

		 <div className="flex-item-right">
		

			<ButtonMailto 
			label={<img src={Email2} alt="Email:" style={{width: '10px', height: '10px'}}/>}  mailto="mailto:acholiwomen4peaced@gmail.com" />
		  
		  	<span></span>
			<img src={facebook} alt="facebook" style={{width: '15px', height: '15px'}}/>
		 <span></span>
		<a href="https://wa.me/256782005825"> <img src={Whatsapp} alt="Whatsapp" style={{width: '15px', height: '15px', cursor: 'pointer'}}/></a> 
		 </div>


	</div>	
	
	
		);
	}

export default Footer1;