import React, {Component} from 'react';
/*import ReactDOM from 'react-dom/client';*/
import CardList from '../Components/CardList';
import { GridData } from '../Components/GridData';
import Header from '../Components/Header';
import Cover from '../Components/Cover';
import Footer from '../Components/Footer';
import SearchBox from '../Components/SearchBox';
import SignIn from '../Components/SignIn';
import Register from '../Components/Register';
import ChangePassword from '../Components/ChangePassword';
import 'tachyons';


import Scroll from '../Components/Scroll';
/*import ProjectGrid from '../Components/ProjectGrid';*/
/*import Particles from 'react-particles-js';*/
import Ranked from '../Components/Ranked'
import UpdateUser from '../Components/UpdateUser'
/*import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";*/
import './MainGrid.css'
import Header1 from './Header1';
import './Header1.css';
import Navbar from './Navbar';
import './Navbar.css';
import HomePage from './HomePage';
import Cover1 from './Cover1';
/*import Cover3 from './Cover3'*/
import ImageSliderHomePage from './ImageSliderHomePage';
import Footer1 from './Footer1';
import WhoweAre from './WhoweAre';
import SearchBox2 from './SearchBox2';
import ContactHeader from './ContactHeader';
import FacebookLogin from './FacebookLogin';

/*const particlesOptions = {
	particles: {
		line_linked: {
			shadow: {
				enable: true,
				color: '#3CA9D1',
				blur: 5tt
			}
		}
	}
}*/


class MainGrid extends Component{
	constructor(props) { 
		super(props)
		this.state = {
		searchfield: "",
		GridData: GridData,
		route: 'HomePage',
			Users:{
			id: '',
			name: '',
			password: '',
			email: '',
			rank: 0,
			Joined: ''
			}
  		}
	}
		onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
		
		}

		onRouteChange = (route) =>{
			this.setState({route: route})
		}
	LoadUser = (data) =>{
		this.setState({Users:{
			id:data.id,
			name: data.name,
			email: data.email,
			rank: data.rank,
			password:data.password
			}
		})
		
	}
	
	
	/*componentDidMount(){
		fetch('http://localhost:3002/Users')s
		.then(response =>response.json())
		.then(data =>(console.log(data)));
	}*/

render() {

	/*console.log(Users)*/
	const Datafil = this.state.GridData.filter(GridData =>{
	return GridData.name.toLowerCase().includes
	(this.state.searchfield.toLowerCase())})
	/*console.log(Datafil)*/
			
return (
<div>
		
		
		<ContactHeader onRouteChange={this.onRouteChange}/>
		<nav>
		<Header1 onRouteChange={this.onRouteChange}/>
		</nav>	
		
	
		<div className='tc'>
		 { this.state.route === 'Home' ?
			<div>
			<Header onRouteChange={this.onRouteChange}/>
			<Ranked name={this.state.Users.name} rank={this.state.Users.rank}/>
		  	
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
			<CardList GridData={Datafil}/>
			</Scroll>
			<Footer1 onRouteChange={this.onRouteChange}/>
			</div>

		:this.state.route==='HomePage' ?
		<div>
		<ImageSliderHomePage onRouteChange={this.onRouteChange}/>
		<HomePage onRouteChange={this.onRouteChange}/>
		<Footer1 onRouteChange={this.onRouteChange}/>	
		</div>

		:this.state.route==='SearchBox2' ?
		<div>
		<section>
		<SearchBox2 searchChange={this.onSearchChange} onRouteChange={this.onRouteChange}/>
		<ImageSliderHomePage onRouteChange={this.onRouteChange}/> 
		</section>
		<HomePage onRouteChange={this.onRouteChange}/>
		<Footer1 onRouteChange={this.onRouteChange}/>
		</div>
		

		
		: this.state.route === 'SignIn' ?
		<div>
		<Header onRouteChange={this.onRouteChange}/>
		<SignIn  LoadUser={this.LoadUser} onRouteChange={this.onRouteChange}/>
		<Footer1 onRouteChange={this.onRouteChange}/>
		</div>

		:this.state.route==='UpdateUser' ?
		<div>
		<Header onRouteChange={this.onRouteChange}/>
		<UpdateUser onRouteChange={this.onRouteChange} LoadUser ={this.LoadUser} />
		<Footer1 onRouteChange={this.onRouteChange}/>
		</div>

		:this.state.route==='ChangePassword' ?
		<div>
		<Header onRouteChange={this.onRouteChange}/>
		<ChangePassword onRouteChange={this.onRouteChange} LoadUser = {this.LoadUser} />
		<Footer1 onRouteChange={this.onRouteChange}/>
		</div>
		
		:this.state.route==='Register' ?
		<div>
		<Header onRouteChange={this.onRouteChange}/>
		<Register onRouteChange={this.onRouteChange}  LoadUser ={this.LoadUser}/>
		<Footer1 onRouteChange={this.onRouteChange}/>
		</div>

		:this.state.route === 'OurTeam' ?
			<div> 	
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
			<CardList GridData={Datafil}/>
			</Scroll>
			<Footer1 onRouteChange={this.onRouteChange}/>
			</div>

		:this.state.route === 'FacebookLoginHeader' ?
		<FacebookLogin onRouteChange={this.onRouteChange}/>
		

		:this.state.route === 'FacebookLoginFooter' ?
		<FacebookLogin onRouteChange={this.onRouteChange}/>
		
		:<HomePage />
		}
	</div>	
	
</div>
		);
	}
}
export default MainGrid;