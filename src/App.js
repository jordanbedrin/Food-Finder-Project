import React, {Component} from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Buttons from './components/Buttons';
import Restaurant from './components/Restaurant';
import db from './db';
import UpperPage from './components/UpperPage';

import './index.css';

// let data = db;
// console.log("okayyy", data)




class App extends Component{


  render(){

    return(
      <div>

      < UpperPage />
      < Map/>
      </div>
    );
  }
}

export default App;
