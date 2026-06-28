import React from 'react';
import ReactDOM from 'react-dom';
import './WhoweAre.css'

function WhoweAre({onRouteChange}) {
  return (
  <div className='Whoweare'>
    <h1 > WHO WE ARE </h1>
    
    
    
    
    <div className="flex-container">
    <span>
	    <div className= "who">
	    <img src="photos/womenDay2019-1.jpg" alt="photo"/>
	   <div className="whowearetxx">
	    <p> Currently </p>
	    </div>
	    </div>
	</span>
	<span>
	    <div className= "who">
	    <img src="photos/womenDay2019-1.jpg" alt="photo"/>
	   <div className="whowearetxx">
	    <p> Currently </p>
	    </div>
	    </div>
	</span>
	<span>
	    <div className= "who">
	    <img src="photos/womenDay2019-1.jpg" alt="photo"/>
	   <div className="whowearetxx">
	    <p> Currently </p>
	    </div>
	    </div>
	</span>
	</div>
  </div>
  );
}
export default WhoweAre;