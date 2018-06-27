import React, {Component} from 'react';
// import Header from './components/Header';
// import Map from './components/Map';
// import Buttons from './components/Buttons';
// import Restaurant from './components/Restaurant';
// import db from './db';
// import UpperPage from './components/UpperPage';
import Home from './components/Home';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
import MainPage from './components/MainPage';


class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <div>
        <Route exact path='/' component={Home}/>
        <Route path="/map" component={MainPage} />
        </div>
      </BrowserRouter>
    );
  
  
  }
  
}

export default App;
