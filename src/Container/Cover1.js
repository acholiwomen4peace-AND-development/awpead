import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainGrid from './MainGrid';
import './Cover1.css';
/*import DoSlideshow from './DoSlideshow';*/
/*import 'tachyons';*/

class Cover1 extends Component{
	constructor(props) { 
		super(props);
	}
/*componentDidMount(){
	const script=document.createElement("script");
	script.src="DoSlideshow.js"
	script.asyn = true;
	document.body.appendChild(script);
}*/

render() {
  return (

  <div class="hero-image" >
    <div class="hero-text">
  <h6>AWPEAD Programme Coordinator giving an account of the activities 
      of the women groups during the Leadership Day celebration in Patongo Court Ground
       on 3oth May 2019 </h6>
  <button>Find out more</button>
  </div>
  </div>
    );
}
}
export default Cover1;