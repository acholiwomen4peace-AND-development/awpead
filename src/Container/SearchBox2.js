import React from 'react';
import './SearchBox2.css';

function SearchBox2({searchfield, searchChange}){
	return(
<div style={{display: 'flex', position: 'relative', zIndex: 400, }} className= 'tc w-70 center grow pa2'>
<input className= 'tc pa2 ba b--green bg-lightest-blue' 
id='Search'
type= 'text'
placeholder='Search'
onChange={searchChange} />
</div>
		);
}
export default SearchBox2;