import React, {Component} from 'react';
import Home from './components/Home';
import {BrowserRouter, Route} from 'react-router-dom';
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
