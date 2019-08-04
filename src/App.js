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
	render(){
		return(
			<div className='tc'>
				<h1>MyPrettyKitties</h1>
				<SearchBox />	
				<CardList kitties = {kitties}/>
			</div>		
		);
	}
}
	

export default App;