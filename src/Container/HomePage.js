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
import FocalPerson from './FocalPerson.jpg';



function HomePage(){

	return ( 
<div>

		<div className='UgandanNGO w-92 pointer center grow shadow-5 bg-black pa1 br5 ma0'>
		<p className=' w-75 center'><span> <strong>AWPEAD</strong></span>Is a Ugandan NGO that provides support to communities
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
				    discussions on critical issues. Violent is delayed as both genders had to understand the dynamics involved, therefore reducing conflicts in community.   
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

	   	<div className='w-100 pointer center shadow-1  grow bg-light-blue pa1 br5 pa0 ma0'>
		<h1 className='center'><span> <strong>ABOUT</strong></span></h1>
		</div>

	   	<div className="row w-100">
	   		<div className="column w-40">
	   		
	   		<div className="w-40 pa0 ma0">
	   		<img src={FocalPerson} style={{width: '200px', height: '150px', 'margin-top': '5px'}} alt="ACHOLI WOMEN FOR PEACE & DEVLOPMENT"/>
	   		</div>

	   		<div className="Background ggg w-100">
	   		<h6> BACKGROUND</h6>
	    	<p className="w-100 tc dib br3 pa3 grow shadow-5">Acholi women for peace and development came in as a 
	   		result of the concerted effort of the community to address 
	   		issues of social justice and equality. This is particularly in 
	   		response to the rehabilitation and the reconstruction needs resulting 
	   		from the long period of insurgency in northern Uganda with a focus 
	   		on conflict reduction objective aimed at minimizing conditions for conflict and 
	   		promoting an environment for durable peace and development.</p>
	   		</div>

	   		<div className=" Beneficiaries ProgrammmeHeading2 w-90">
	   		<h6>Target Beneficiaries Includes:</h6>
	   		<ol>
	   		<table>
	   		<tr>
	   		<td>
	   		<li>Children, children born of war ( Juveniles ).  </li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Child mothers.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Women who are disadvantaged ie widows, single mothers, among others.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Survivors of sexual and gender-based violence.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Former abducted persons.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Youth; aged 30 and below.</li>
	   		</td>
	   		</tr>

	   		</table>
	   		</ol>
	   		</div>
	   		</div>

	   			<div className="column w-60 h-60">
	   			<div className=" flex-container3 w-100">
	   			<div className= "Programme2 w-90 tc dib br3 pa2 grow shadow-5">
	   			<div className="ProgrammmeHeading2">
	   			<h1>VISION</h1>
	   			<p> Create Condition for women and girls for a more comprehensive peace and active citizenry for development.</p> 
 				</div>
 				</div>
 				

 				<div className= "Programme2 w-90 tc dib br3 pa2 grow shadow-5">
	   			<div className="ProgrammmeHeading2">
	   			<h1>MISSION</h1>
	   			<p>Promote an enabling environment for durable peace and development for women and girls through access to Justice
	   			and empowernment initiatives</p> 
 				</div>
 				</div>
 				
	   			<div className= "Programme2 w-90 tc dib br3 pa2 grow shadow-5">
	   			<div className="ProgrammmeHeading2">
	   			<h1>OUR GOAL</h1>
	   			<p>The purpose of AWPEAD is to empower the community of women and children for active participation in 
	   			promoting peace and harmony, conflict transformation, human rights, child protection and economic initiatives in the community.  
	   			</p> 
 				</div>
 				</div>
 				</div>
 			</div>
 			<div className="column w-30">
	   		<div className="objectives ">
	   		<h6>Strategic objectives</h6>
	   		
	   		<ol>
	   		<table>
	   		<tr>
	   		<td>
	   		<li>To enhance the capacity of women
	   		 to actively participate in Peace building activities for peaceful co-existence. </li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>To promote better livelihood 
	   		practices and the culture of savings among the women and young people for self-reliance.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>To strengthen the capacity of structures and increase measures in 
	   		reducing Child protection concerns. </li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>To involve key stakeholders and community in promotion of Women rights, reduction 
	   		on gender-based violence and access to justice for women and children.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Conduct awareness campaigns against HIV/AIDS, provide care/support for 
	   		PHLA and reproductive health education for young girls and women.</li>
	   		</td>
	   		</tr>
	   		</table>
	   		</ol>
	   		
	   		</div>

			<div className="thematic">
	   		<h6>Thematic areas</h6>
	   		
	   		<ol>
	   		<table>
	   		<tr>
	   		<td>
	   		<li>Peace Building Programmes.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Women rights and access to Justice.</li>
	   		</td>
	   		</tr>
	   		<tr>
	   		<td>
	   		<li>Sexual and gender Based Violence prevention and response. </li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Leadership and communication skills enhancement.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Livelihood intervention; Agriculture, IGAs, small business, Village Savings and Loans Association (VSLA).</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Child Protection/children in conflict with the law.</li>
	   		</td>
	   		</tr>

	   		<tr>
	   		<td>
	   		<li>Sexual and reproductive health, rights and HIV/AIDS.</li>
	   		</td>
	   		</tr>
	   		</table>
	   		</ol>
	   		
	   		</div>
	   		</div>
	   	
	   			
 		</div>

 				

		</div>

		
		<button  className="buttonDonateNow grow pointer "><a>DONATE NOW</a></button>
		<WebLink/>
		<ButtonMailto label={"Send Email NOW"} mailto="mailto:acholiwomen4peaced@gmail.com" />
		
		<div style={{height: '25px'}} className='w-80 br-20 pointer center shadow-1  grow bg-light-blue br5 pa0 ma0'>
		<h1 className='center'><span> <strong>OUR DEVELOPMENT PARTNERS AND SUPPORTERS</strong></span></h1>
		</div>

		<div className="flex-container-2 row2">

		<div className="column2">
		<Tilt className="content-2 Tilt br2 shadow-2" className="options={{max: 55}} style={{zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{margin:'0', width: '150px', Height: '50px'}} src={GOU} alt='GOVERNMENT OF UGANDA' />
  		</div> 
  		</Tilt>
  		</div>

  		<div className="column2">
  		<Tilt className="content-2 Tilt br2 shadow-2" className="options={{max: 55}} style={{ zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{argin:'0', width: '150px', Height: '50px'}} src={LFD} alt='LIBREFOUNDATION' />
  		</div> 
  		</Tilt>
  		</div>		

  		<div className="column2">
  		<Tilt className="content-2 Tilt br2 shadow-2" className= "options={{max: 55}} style={{zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{margin:'0', width: '150px', Height: '50px'}} src={UWN} alt='UGANDA WOMENS NETWORK' />
  		</div> 
  		</Tilt>
  		</div>		

  		<div className="column2">
  		<Tilt className="content-2 Tilt br2 shadow-2" className="options={{max: 55}} style={{zIndex: 500, height:'50px', width: '150px'}}">
  		<div className="Tilt-inner">
  		<img style={{margin:'0', width: '150px', Height: '50px'}} src={NAWOU} alt='NAWOU' />
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