import React, {Component} from 'react';

class Header extends Component {
  constructor(){
    super()
  }

  render() {
// console.log("our data is ", this.props.data.subs[0].name);
    return (
      <div id = 'header'>
      <h1> Choose a Food Category! </h1>
        <div id = "buttons">
          <button type="button" onClick={this.props.changeCategory}>Subs!</button>
          <button type="button" onClick={this.props.changeCategory}>Mexican!</button>
          <button type="button" onClick={this.props.changeCategory}>Healthy!</button>
          <button type="button" onClick={this.props.changeCategory}>Dessert!</button>
        </div>
        <div>

        </div>
        <div>

        </div>

      </div>
    )
  }
}

export default Header;
