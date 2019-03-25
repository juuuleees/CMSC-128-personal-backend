import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css'

/* * * * 
 *  import components
 *  these serve as the views
 * * * */
import Home from './Components/Home'
import Movies from './Components/Movies'
import Movie from './Components/Movie'
import Add from './Components/AddMovie'
import Edit from './Components/EditMovie'

class App extends Component {
  render() {
    return (
      <div>
        <h1><a href='/'>Movie App</a></h1>
        <Router>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/add" component={Add} />
            <Route exact={true} path="/edit/:_id" component={Edit} /> 
            <Route exact={true} path="/movies" component={Movies} />
            <Route exact={true} path="/movie/:_id" component={Movie} /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
