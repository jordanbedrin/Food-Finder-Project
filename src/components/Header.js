import React, {Component} from 'react';
import axios from 'axios';
import db from '../db';



class Header extends Component {
  constructor(){
    super()
  }

  render() {
console.log("our data is ", this.props.data.subs[0].name);
    return (
      <div id = 'header'>
      <h1> Choose a Food Category! </h1>
        <div id = "buttons">
          <button type="button" onClick={this.props.changeCategory}>Subs!</button>
          <button type="button" onClick={this.props.changeCategory}>Mexican!</button>
          <button type="button" onClick={console.log("heeeey")}>Healthy!</button>
          <button type="button" onClick={console.log("heeeey")}>Dessert!</button>
        </div>
        <div>
          <button type="button" id = "gobutton">Fudge On!</button>
        </div>
        <div>

        </div>

      </div>
    )
  }
}

export default Header;
