import React, {Component} from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Buttons from './components/Buttons';
import './index.css';


class App extends Component{
  render(){
    return(
      <div>
      < Header/>
      < Map/>
      </div>
    );
  }
}

export default App;
