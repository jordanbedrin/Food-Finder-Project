import React, {Component} from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Buttons from './components/Buttons';
import Restaurant from './components/Restaurant';
import db from './db';
import UpperPage from './components/UpperPage';
import Home from './components/Home';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';



// let data = db;
// console.log("okayyy", data)


class App extends Component{

  render(){
    return(

      <BrowserRouter>
        <div>
        { < Home />
        < UpperPage />
        < Map/> }

{/* // write a new component that is going to render both map & upper page in the same component
 */}


        <Route exact path='/' component={Home}/>
        <Route path="/map" component={Map} />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
