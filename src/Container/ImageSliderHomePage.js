import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import {Fade, Zoom, Slide} from 'react-slideshow-image';
import im1 from './im1.png';
import im2 from './im2.png';
import im3 from './im3.png';
import im4 from './im4.png';
import im5 from './im5.JPG';
import im6 from './im6.png';
import './ImageSlider.css';


const SlideImages = [
{
	url: im1,
	txt: "",
	Caption: ''

},
{
	url: im2,
	txt: "",
	Caption: ''
},
{
	url: im3,
	txt: "",
	Caption: ''
},
{
	url: im4,
	txt: "",
	Caption: ''
},
{
	url: im5,
	txt: "",
	Caption: ''
},
{
	url: im6,
	txt: "",
	Caption: ''
}

];
const divstyle={
	display:'flex',
	alignItems:"center",
	justifyContent:"center",
	height:"300px",
	width:"100%",
	backgroundSize:'cover',


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
const backgroundImage={
	zIndex: '-10'
}

function ImageSliderHomePage(){
	return (
		<div className='slide-container' style={{  zIndex: -10, width:'100%', height:'auto' }}>
		<Zoom>
		{SlideImages.map((image, index) =>(
			<div key={index}>
			<div style={{...divstyle, backgroundImage:`url(${image.url})`}}>
			<span style={{spanstyle}}>{`${image.txt}`}{image.Caption}</span>
			</div>
			</div>
			))}
			</Zoom>
			</div>
		)
}
export default ImageSliderHomePage;