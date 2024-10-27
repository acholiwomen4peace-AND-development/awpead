import React from 'react';
import ReactDOM from 'react-dom';
import './Cover1.css';

/*var images = new Array('im1.jpg', 'img2.jpg', 'img3.jpg');*/
var nextimage=0;
doSlideshow();

function DoSlideshow(){
	{nextimage >=images.length ?
		{nextimage=0;}
	$('.hero-image')

	.css('background-image','url("'+images[nextimage++]+'")');

	.fadeIn(500, function(){
		setTimeout(DoSlideshow, 1000);
	});

}

}

export default DoSlideshow;