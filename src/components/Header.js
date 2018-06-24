import React, {Component} from 'react';

class Header extends Component {
  render() {

    return (
      <div id = 'header'>
      <h1> Choose a Category! </h1>
        <div id = "buttons">
          <button type="button">Healthy!</button>
          <button type="button">Ice Cream!</button>
          <button type="button">Cake!</button>
          <button type="button">Chocolate!</button>
        </div>
        <div>
          <button type="button" id = "gobutton">Fudge On!</button>
        </div>
      </div>
    )
  }
}

export default Header;
