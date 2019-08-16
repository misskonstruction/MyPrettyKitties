import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {kitties} from './kitties';
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state = {
			kitties: kitties,
			searchfield: ''
		}
	}

onSearchChange = (event) => {
	this.setState({searchfield: event.target.value})
}

	render(){
		const {kitties, searchfield} = this.state;
		const filteredKitties = kitties.filter(kitties =>{
			return kitties.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		return(
			<div className='tc'>
				<h1 className='f1'>My Pretty Kitties</h1>
				<SearchBox searchChange={this.onSearchChange}/>	
				<Scroll>
					<ErrorBoundary>
					 <CardList kitties = {filteredKitties}/>
					</ErrorBoundary>
				</Scroll>
				
			</div>		
		);
	}
}
	

export default App;