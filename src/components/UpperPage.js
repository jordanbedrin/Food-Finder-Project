import React, {Component} from 'react';
import Header from './Header';
import Restaurant from './Restaurant';
import ResData from './ResData';
import db from '../db';
import Map from './Map';
import {Link} from 'react-router-dom';



class UpperPage extends Component{

  constructor(){
    super()
    this.state = {
      category: "subs",
      selectedRes: {},
      db: db
    }
    this.changeCategory = this.changeCategory.bind(this);
    this.changeRes = this.changeRes.bind(this);
  }

  changeCategory(ev){
      this.setState( {
        category: ev.target.textContent.toLowerCase().slice(0,-1)
      })
  }

  changeRes(name){
    let res = this.state.db[this.state.category].find(restaurant => {
      if(restaurant.name === name) {
        return restaurant;
      }
    })
    this.setState({
      selectedRes: res
    })
  }

  render() {
    return(
      <div>
        <div className = "Navbar">
          <nav>
            <div className = "button2">
              <Link class="waves-effect waves-light btn" to="/"><input type="submit" value="Home" /></Link>
            </div>
            <h1>FUDGEBUCKET</h1>
          </nav>
        </div>

        <div className = "upper">
          <Header data = {db}  changeCategory={this.changeCategory} />
          <Restaurant changeRes={this.changeRes} data = { db[this.state.category] } />
          <ResData rest = {this.state.selectedRes} />
        </div>

        <div className="MapComponent">
          < Map rest = {this.state.selectedRes} />
        </div>
        <div className = "HomeFooter">
        </div>

    </div>
    )
  }
}

export default UpperPage;
