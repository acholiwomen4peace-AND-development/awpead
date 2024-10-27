import React from 'react';
import ReactDOM from 'react-dom';
import './SignIn.css';


function Cover() {
  return (
    <div style={{width: '100%', height: 'auto', margin: '0px 0px 0px 0px'}}>
	    <h2 > OUR WORK </h2>
	<span>
	    <div className= "hero">
	    <img src="photos/womenDay2019-1.jpg" alt="photo"/>
	   <div className="herotxx">
	    <p> Team from Uganda Women’s Network appreciates the leadership 
	    skills exhibited through tangible products of local organizations and 
	    women groups on Leadership Day celebration on 30th May 2019</p>
	    </div>
	    </div>
	</span>
	<span>	
	    <div className= "hero">
	    <img src="photos/WomenDay2019-2.jpg" alt="photo"/>
	   <div className="herotxx">
	    <p> Patongo United Football Club with Programme Coordinator 
	    AWPEAD extreme right during Peace Football Match on mark the end of Leadership 
	    Event in Patongo Court Ground on 30th may 2019</p>
	    </div>
	    </div>
	 </span>
	
    </div>
  );
}
export default Cover;