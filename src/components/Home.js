import React from 'react';
import './Home.css';
import Button from './Button';
import {Link} from 'react-router-dom';

class Home extends React.Component {
 render() {
   return (
   <div className= "Homebkgd">
    {/* <div className = "HomebkgdOverlay"> 
      </div> */}

    <div className = "Navbar">
      <nav>
        {/* <ul>
          <li>Search</li>
          <li>Favorites</li>
          <li>Trending</li>
          <li>Fudge It</li>
        </ul> */}
      </nav>
    </div>


    <div className = "CallToAction">
      <div className="logo"> 
        <img src="https://i.imgur.com/6wKWr7J.png" alt="logo pic"/>
      </div>
      <div className="Homeform">
        <form>
          <label>
          <input type="text" name="name" />
          </label>
          <Button />
        </form>
      
      </div>
    </div>
    
    <div className = "HomeFooter">
    </div>

   </div>
   )
 }
}
export default Home;
