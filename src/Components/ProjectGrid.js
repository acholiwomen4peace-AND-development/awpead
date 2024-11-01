import React from 'react';
import ReactDOM from 'react-dom';
import {GridData} from './GridData';


function ProjectGrid(props) {
/*const pic = require("./photos/1.jpg");*/
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
     
		<img style={{width: '200px', Height: '200px'}} src={`/staffPhotos/${props.id}.jpg`} alt='Staff Photo' />
		<div>
		<h2> {props.name} </h2>
		<p> {props.birthDate} </p>
		<p> {props.email} </p>
		</div>
	</div>
  );
}
export default ProjectGrid;
