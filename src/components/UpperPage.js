import React, {Component} from 'react';
import Header from './Header';
import Restaurant from './Restaurant';
import db from '../db';

class UpperPage extends Component{

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

  render() {
    return(
      <div className = "upper">
        <Header data = {db} changeCategory={this.changeCategory} />
        <Restaurant data = { db[this.state.category] } />
      </div>
    )
  }
}

export default UpperPage;
