
import React, { Component } from 'react';

/* constructor for edit movie view */
class EditMovie extends Component {
	constructor(props) {
		super(props)
		this.state = {
			_id: this.props.match.params._id,
			title: '',
			actor: '',
			year: '',
			franchise: '',
			director: ''
 		}

 		fetch('http://localhost:3001/movie/find-by-id/' + this.state._id)
			.then((response) => { return response.json() })
			.then((body) => {
				this.setState({
					title: body.title,
					actor: body.actor,
					year: body.year,
					franchise: body.franchise,
					director: body.director
				})	
			})

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
			fetch('http://localhost:3001/movie/edit/' + this.state._id, {
					headers: new Headers({
		           		'Content-Type': 'application/json'
		        	}),
					method: "POST",
					body: JSON.stringify ({
						_id: this.state._id,
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
		const { title, actor, year, franchise, director } = this.state

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

export default EditMovie;