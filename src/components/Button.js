import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Button extends Component{
  render () {
    return (
        <div className = "button1">
      <Link class="waves-effect waves-light btn" to="/map"><input type="submit" value="Let's Go!" /></Link>
        </div>
    )
  }
}

export default Button ;
