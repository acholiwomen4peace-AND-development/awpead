import React, {Component} from 'react';
import './HomePage.css'
import Banner from './Banner.JPG';
import GenderEquality from './ProgrammmePics/GenderEquality.jpg';
import PeaceBuilding from './ProgrammmePics/PeaceBuilding.jpg';
import EconomicEmpowerment from './ProgrammmePics/EconomicEmpowerment.jpg';
import Leadership from './ProgrammmePics/Leadership.jpg';
import Health from './ProgrammmePics/Health.jpg';
import Advocacy from './ProgrammmePics/Advocacy.jpg';
import Plays2 from './Impacts/Plays2.jpg';
import Advocacy2 from './Impacts/Advocacy2.JPG';
import Peace2 from './Impacts/Peace2.jpg';
import EconomicEmpowerment2 from './Impacts/EconomicEmpowerment2.jpg';
import WebLink from './WebLink';
import ButtonMailto from './ButtonMailto';
import {Tilt} from 'react-tilt';
import GOU from './Partners/GOU.jpg';
import UWN from './Partners/UWN.jpg';
import LFD from './Partners/LFD.jpg';
import NAWOU from './Partners/NAWOU.jpg';
import UWEAL from './Partners/UWEAL.jpg';



function HomePage(){

	return ( 
<div>

		<div className='w-92 pointer center grow shadow-5 bg-black pa1 br5 ma0'>
		<p className='w-75 center'><span> <strong>AWPEAD</strong></span>Is a Ugandan NGO that provides support to communities
		 in Post-Conflict recovery majorly addressing issues of Social Justice and equality
		  to promote an environment for durable peace & development.</p>
		</div>
		
		<div className='w-100 pointer center shadow-1  grow bg-light-blue pa1 br5 pa0 ma0'>
		<h1 className='center'><span> <strong>OUR PROGRAMMES</strong></span></h1>
		</div>

		<div className="flex-container-1 row">

					<div className="column">
					<div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>(1). Gender Equality and Women Rights </p>
				    <img style={{width: '800px', height: '300px'}} src={GenderEquality} alt="Gender Equality"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Focus Group Discussion and a gender analysis exercise. </p>
				    </section>
	   				 </div>
 				 	   
  				
	   				 <div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>(2). Economic Empowerment and Women Business Enhancement </p>
				    <img style={{width: '800px', height: '300px'}} src={EconomicEmpowerment} alt="Economic Empowerment"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Gum Pe Rom Village Savings & Loan Association group conduct routine activities 
				    with UGX: 1 million savings to improve household Livelihood.</p>
				    </section>
	   				 </div>

	   				  <div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>(3). Health: HIV/AIDs and SRHR </p>
				    <img style={{width: '800px', height: '300px'}} src={Health} alt="Gender Equality"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Patients and Staff Toilets being cleaned by AWPEAD Team.</p>
				    </section>
	   				 </div>
	   				 </div>
	   				 <div className="column">



	   				 <div className= "Programme style={{ width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>(4). Peace Building and Access to Justice </p>
				    <img style={{width: '800px', height: '300px'}} src={PeaceBuilding}  alt="Peace Building"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Achayo Pouline and her husband presents their family vision for the year, the 
				    husband was able to marry her as one activity stated in the vision, improvement in their relationship 
				    and reduced alcohol consumption which had caused violence to his wife. </p>
				    </section>
	   				 </div>


	   				 <div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>(5). Leadership and Institutional Development </p>
				    <img style={{width: '800px', height: '300px'}} src={Leadership} alt="Gender Equality"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Developing skills of leaders of community organizations in Leadership, Management
				     & Communication skills in Agago District and Kitgum District respectively.</p>
				    </section>
	   				 </div>

	   				

	   				 <div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>(6). Advocacy and Social Research </p>
				    <img style={{width: '800px', height: '300px'}} src={Advocacy} alt="Gender Equality"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Programme Coordinator AWPEAD (second left) leading the cleanliness in Patongo Main 
				    Market as one major charity activity.</p>
				    </section>
	   				 </div>
	   				 </div>

		</div>
		
		<div className='w-100 pointer center shadow-1  grow bg-light-blue pa1 br5 pa0 ma0'>
		<h1 className='center'><span> <strong>OUR IMPACTS</strong></span></h1>
		</div>

		<div className="flex-container-1 row">

					<div className="column">
					<div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>Theater performance: The use of drama, plays and music to give information and 
				    message on key community human rights and gender based violence issues </p>
				    <img style={{width: '800px', height: '300px'}} src={Plays2} alt="Plays"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Loyo bedoa beda women group presents Larakaraka dance during business community 
				    launch in Patongo Town Council, Agago District. </p>
				    </section>
				    <p>Perpetrators of violence have been able to testify how the plays changed their lives because some 
				    of the characters in the plays portrayed their real behaviors. </p>
	   				 </div>
 				 	   
  				
	   				 <div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>Advocacy on rights and participation of the community and stakeholders in gender equality and 
				    reduced gender based violence.   </p>
				    <img style={{width: '800px', height: '300px'}} src={Advocacy2} alt="Advocacy"/>
				    </div>
				    <section>
				    <p>AWPEAD Photo: Engaging women to advocate for rights and reduction of gender-based violence during District 
				    launch of 16 days of activism in Omiya Pacwa, Agago district </p>
				    </section>
	   				 </div>
	   				 </div>

	   				 <div className="column">

	   				 <div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>Women and Men have been encouraged to participate in Socio-economic activities and improve attitude 
				    </p>
				    <img style={{width: '800px', height: '300px'}} src={EconomicEmpowerment2} alt="Economic Empowerment"/>
				    </div>
				    <section>
				    <p> 
				    AWPEAD Photo: I used the money got during sales of honey in the second harvest to cultivate 1 acre of bananas, and I sell a bunch
				    at a minimum of 7,000=, these has changed my life and family economic status”. Said Okello Sunday  
				     </p>
				    </section>
	   				 </div>
	   				 

	   				<div className= "Programme style={{width: '500px', height: '200px'}}">
				    <div className="ProgrammeHeading">
				    <p>
				    The involvement of women in leadership and decision-making position has impacted positively in the peace process and 
				    discussions on critical issues. Violent is delayed as both genders had to understand the dynamics involved, thus reducing conflicts in community.   
				    </p>
				    <img style={{width: '800px', height: '300px'}} src={Peace2} alt="Peace Building"/>
				    </div>
				    <section>
				    <p> 
				    AWPEAD Photo: Negotiation on Land and property rights for peaceful co-existence in Patongo Sub-county.
				    Leaders support the community to use non- violent dispute resolution mechanism to handle 
				    conflicts and disagreements within the communities.   
				     </p>
				    </section>
	   				 </div>
	   			</div>
	   	<div className="row">
	   			<div className="column">
	   			<div className= "Programme2 style={{width: '200px', height: 'auto'}}">
	   			<div className="ProgrammmeHeading2">
	   			<p> <span>OUR GOAL:</span>The purpose of AWPEAD is to empower the community of women and children for active participation in 
	   			promoting peace and harmony, conflict transformation, human rights, child protection and economic initiatives in the community.  
	   			</p> 
 				</div>
 				</div>
 				

	   	
	   			<div className= "Programme2 style={{width: '200px', height: '200px'}}">
	   			<div className="ProgrammmeHeading2">
	   			<p> <span>VISION:</span> Create Condition for women and girls for a more comprehensive peace and active citizenry for development.</p> 
 				</div>
 				</div>
 				

 			
	   			<div className= "Programme2 style={{width: '200px', height: '200px'}}">
	   			<div className="ProgrammmeHeading2">
	   			<p> <span>MISSION:</span>Promote an enabling environment for durable peace and development for women and girls through access to Justice
	   			and empowernment initiatives</p> 
 				</div>
 				</div>
 				</div>
 		</div>

 				

		</div>

		
		<button  className="buttonDonateNow grow pointer "><a>DONATE NOW</a></button>
		<WebLink/>
		<ButtonMailto label={"Send Email NOW"} mailto="mailto:acholiwomen4peaced@gmail.com" />
		
		<div style={{height: '25px'}} className='w-80 br-20 pointer center shadow-1  grow bg-light-blue br5 pa0 ma0'>
		<h1 className='center'><span> <strong>PARTNERS AND SUPPORTERS</strong></span></h1>
		</div>

		<div className="flex-container-2 row2">

		<div className="column2">
		<Tilt className="content-2 Tilt br2 shadow-2" className="options={{max: 55}} style={{zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{margin:'0', width: '150px', Height: '50px'}} src={GOU} alt='logo' />
  		</div> 
  		</Tilt>
  		</div>

  		<div className="column2">
  		<Tilt className="content-2 Tilt br2 shadow-2" className="options={{max: 55}} style={{ zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{argin:'0', width: '150px', Height: '50px'}} src={LFD} alt='logo' />
  		</div> 
  		</Tilt>
  		</div>		

  		<div className="column2">
  		<Tilt className="content-2 Tilt br2 shadow-2" className= "options={{max: 55}} style={{zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{margin:'0', width: '150px', Height: '50px'}} src={UWN} alt='logo' />
  		</div> 
  		</Tilt>
  		</div>		

  		<div className="column2">
  		<Tilt className="content-2 Tilt br2 shadow-2" className="options={{max: 55}} style={{zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{margin:'0', width: '150px', Height: '50px'}} src={NAWOU} alt='logo' />
  		</div> 
  		</Tilt>	
  		</div>	

  		<div className="column2">
  		<Tilt className="content-2 Tilt br2 shadow-2" className="options={{max: 55}} style={{zIndex: 500, height:'5px', width: '100px'}}">
  		<div className="Tilt-inner">
  		<img style={{margin:'0', width: '100px', Height: '5px'}} src={UWEAL} alt='logo' />
  		</div> 
  		</Tilt>	
  		</div>	

  		</div>

 		
</div>

		);
}

export default HomePage;