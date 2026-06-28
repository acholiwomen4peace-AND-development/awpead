import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Fade, Zoom, Slide} from 'react-slideshow-image';
 import CardList from '../Components/CardList';
 import {GridData} from '../Components/GridData';
 import Scroll from '../Components/Scroll';
import './ImageSlider.css';


const divstyle={
	display:'flex',
	alignItems:"center",
	justifyContent:"center",
	height:"320px",
	width:"100%",
	backgroundSize:'50%',
	padding: '40px',


	 backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  top:'0%',
  bottom: '0%',
  /*backgroundSize: 'cover'*/
  zIndex: '-10'

}

const spanstyle={
background:"#efefef",
/*transform: translate(-50%, -50%);*/
fontSize: "30px",
color: 'white'
}

function MeetTeam(){
	return (
		<div className='slide-container' style={{  zIndex: -10, width:'100%', height:'auto' }}>
		<Zoom>

			<div style={{...divstyle }}>
			<Scroll>
						<CardList GridData={GridData}/>

			</Scroll>
			</div>
			
		</Zoom>
			</div>
		)
}
export default MeetTeam;