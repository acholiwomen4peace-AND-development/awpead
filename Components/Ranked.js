import React from 'react';
import './Rank.css';
const Ranked = ({ name, rank }) =>{
	 
	return(
<div className = 'Rank white f3'>
	<div>
	{`Welcome, ${name}, Your current login entry Count is `}
	
	
	{rank}
	
</div>
</div>
		);

}
export default Ranked;