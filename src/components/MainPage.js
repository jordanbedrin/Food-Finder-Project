import React, {Component} from 'react';
import UpperPage from './UpperPage';
import Map from './Map';

class MainPage extends Component{
  render () {
    return (
      <div>
      <UpperPage/>
      <Map/>
      </div>
    )
  }
}

export default MainPage;
