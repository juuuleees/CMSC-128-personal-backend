
import React, { Component } from 'react';

class Movies extends Component {
	constructor(props) {
		super(props)

		// 1. Declared a state field which acts as a movie container
		this.state = {
			movies: []
		}

		// 2. Send a GET request to server to get movies
		// 	set the movies data to the state field
		fetch('http://localhost:3001/movie/find-all/')
			.then((response) => { return response.json() })
			.then((body) => {
				this.setState({ movies: body })
				})
	}

	deleteMovie(title){
		fetch('http://localhost:3001/movie/delete/', {
				headers: new Headers({ 
					'Content-Type': 'application/json' 
				}), 
				method: "POST", 
				body: JSON.stringify({
					title: title
				})
			})
			.then((response) => { return response.json() })
			.then((json) => { console.log(json) })
	}

	editMovie(_id){
		window.open('http://localhost:3001/edit/' + _id);
	}

	render() {
		return (
			<div>
				<h2>Movies List</h2>
				<form action='/add/'><input className='button' type="submit" value="Add Movie" /></form>
				<ol>
					{
						// 3. Rendered a list of <li> based on the movies list inside state
						this.state.movies.map((movie) => {
							return <li id='list' key={ movie._id }><a id='movie' href={'/movie/' + movie._id}>{movie.title}</a>
								<button id='editB'><form 
									action={'/edit/' + movie._id}>
									<input className='button' id='edit' type='submit' value='Edit'/>
								</form></button>
								<button id='deleteB'><form 
									action='/movies/'
									onSubmit={this.deleteMovie.bind(this, movie.title)}>
									<input className='button' id='del' type='submit' value='Delete'/>
								</form></button>
								</li>
							})
					}
				</ol>
			</div>

			)
	}
}

export default Movies;