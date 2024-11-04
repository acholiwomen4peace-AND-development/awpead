import React from 'react';
import ReactDOM from 'react-dom';
import {GridData} from './GridData';
import './CardList.css';
/*import mike from './mike.jpg';*/

function ProjectGrid(props) {
const pic = require(`./staff/${props.id}.jpg`);
  return (
<div className=' test w-25 tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
  
    <img style={{width: '200px', height: '200px'}} src={pic} alt="Staff Photos" /> 
		<div >
		<h2 className="name1"> {props.name} </h2>
		<p className="contact1">{props.contact} </p>
		<p className="email1"> {props.email} </p>
		</div>
	
</div>
  );
}
export default ProjectGrid;
