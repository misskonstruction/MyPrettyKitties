import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {kitties} from './kitties';

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
		const filteredKitties = this.state.kitties.filter(kitties =>{
			return kitties.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
		return(
			<div className='tc'>
				<h1>MyPrettyKitties</h1>
				<SearchBox searchChange={this.onSearchChange}/>	
				<CardList kitties = {filteredKitties}/>
			</div>		
		);
	}
}
	

export default App;