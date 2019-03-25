
import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				<h2>Welcome to the homepage!</h2>
				<br/>
				<form action='/movies/'>
					<input id='back' type='submit' value='View Movies List' />
				</form>
			</div>
			)
	}
}

export default Home;