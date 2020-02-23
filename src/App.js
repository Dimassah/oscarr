import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Actors from './components/actors'
import Actress from './components/actress'
import Films from './components/films'
import './css/style.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar title="Oscars 2020"/>
          <Route exact path="/" render = {() => <Home title="Oscar Winers"/>}/>
          <Route path="/actors" render = {Actors}/>
          <Route path="/actress" render = {Actress}/>
          <Route path="/films" render = {() => <Films/>}/>
          {/* <Home title="Oscar Winers" /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
