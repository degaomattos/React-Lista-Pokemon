import React, { Component } from 'react';
import './App.scss';
import Lista from './components/Lista';
import Detalhes from './components/Detalhes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" >
                Pokemon
              </a>
            </div>
          </nav>
        </header>
        <Router>
          <div>
          <Route exact path="/" component={Lista} />
          <Route path="/:id" component={Detalhes}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
