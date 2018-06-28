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
          <h1>FUDGEBUCKET</h1>
      </nav>
    </div>


    <div className = "CallToAction">
      <div className="logo"> 
        <img src="https://i.imgur.com/cZ2S43Z.png" alt="logo pic"/> 
        <h2>Find Food Fast </h2>
        
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
