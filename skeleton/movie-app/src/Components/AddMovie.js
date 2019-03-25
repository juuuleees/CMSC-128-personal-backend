
import React, { Component } from 'react';

class AddMovie extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			actor: '',
			year: '',
			franchise: '',
			director: ''
 		}

 		this.inputTitle = this.inputTitle.bind(this)
 		this.inputActor = this.inputActor.bind(this)
 		this.inputYear = this.inputYear.bind(this)
 		this.inputFranchise = this.inputFranchise.bind(this)
 		this.inputDirector = this.inputDirector.bind(this)

		}

		inputTitle(e){ this.setState({ title: e.target.value }) }
		inputActor(e){ this.setState({ actor: e.target.value }) }
		inputYear(e){ this.setState({ year: e.target.value }) }
		inputFranchise(e){ this.setState({ franchise: e.target.value }) }
		inputDirector(e){ this.setState({ director: e.target.value }) }
		submitMovie(){
			fetch('http://localhost:3001/movie/add/', {
					headers: new Headers({
		           		'Content-Type': 'application/json'
		        	}),
					method: "POST",
					body: JSON.stringify ({
					    title: this.state.title,
					    year: this.state.year,
					    actor: this.state.actor,
					    director: this.state.director,
					    franchise: this.state.franchise
		  				})
					})
					.then((response) => { return response.json() })
					.then((json) => { console.log(json) })
		}



	render() {

		return (
			<div>
				<h3>Add Movie</h3>
				<form action='/movies/' onSubmit={
					this.submitMovie.bind(this)}>
					Title
					<br/>
					<input className='input'
						type='String'
						value={ this.state.title }
						onChange={ this.inputTitle } />
					<br/>
					Year
					<br/>	
					<input className='input'
						type='Number'
						value={ this.state.year }
						onChange={ this.inputYear } />
					<br/>
					Actor(s)
					<br/>
					<input className='input'
						type='String'
						value={ this.state.actor }
						onChange={ this.inputActor } />
					<br/>
					Director
					<br/>
					<input className='input'
						type='String'
						value={ this.state.director }
						onChange={ this.inputDirector } />
					<br/>
					Franchise
					<br/>	
					<input className='input'
						type='String'
						value={ this.state.franchise }
						onChange={ this.inputFranchise } />
					<br/>
					<br/>
					<input className='button' type='submit'/>
				</form>
			</div>
		)
	}
}

export default AddMovie;