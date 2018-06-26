import React, {Component} from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Buttons from './components/Buttons';
import Restaurant from './components/Restaurant';
import db from './db';

import './index.css';

// let data = db;
// console.log("okayyy", data)




class App extends Component{
  constructor(){
    super()
    this.state = {
      category: "subs"
    }
    this.changeCategory = this.changeCategory.bind(this)
  }

  changeCategory(ev){
      this.setState( {
        category: ev.target.textContent.toLowerCase().slice(0,-1)
      })
  }

  render(){

    return(
      <div>

      < Header data = {db} changeCategory={this.changeCategory}/>
      < Restaurant data = { db[this.state.category] }/>
      < Map/>
      </div>
    );
  }
}

export default App;
