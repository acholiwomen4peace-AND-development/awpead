import React from 'react';
import {FacebookShareCount, EmailShareButton, FacebookIcon, FacebookShareButton,EmailIcon, 
	WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, 
	LineIcon, LineShareButton} from 'react-share';
import {ShareSocial} from 'react-share-social';
import './WebLink.css'
export default function WebLink(){
	
	return(
<div>
			<div>
			<h1> Share Link</h1>
			
			<span><WhatsappShareButton url={"https://acholiwomen4peace-and-development.github.io/awpead/"}>
			<WhatsappIcon size={32} round={true}/>
			</WhatsappShareButton></span>

			<span><FacebookShareButton url={"https://acholiwomen4peace-and-development.github.io/awpead/"}>
			<FacebookIcon size={32} round={true}/>
			<FacebookShareCount url={"https://acholiwomen4peace-and-development.github.io/awpead/"}>
                    {shareCount => <div>{shareCount}</div>}

             </FacebookShareCount>  
			</FacebookShareButton></span>

			<span><TwitterShareButton url={"https://acholiwomen4peace-and-development.github.io/awpead/"}>
			<TwitterIcon size={32} round={true}/>
			</TwitterShareButton></span>

			<span><EmailShareButton url={"https://acholiwomen4peace-and-development.github.io/awpead/"}>
			<EmailIcon size={32} round={true} />
			</EmailShareButton></span>

			<span><LineShareButton url={"https://acholiwomen4peace-and-development.github.io/awpead/"}>
			<LineIcon size={32} round={true} />
			</LineShareButton></span>
			</div>
	
</div>
);
} 