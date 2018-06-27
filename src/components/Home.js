import React from 'react';
import './Home.css';

class Home extends React.Component {
 render() {
   return (
   <div className= "Homebkgd">
    <div className = "HomebkgdOverlay"> 
      </div>

    <div className = "Navbar">
      <nav>
        <ul>
          <li>Search</li>
          <li>Favorites</li>
          <li>Trending</li>
          <li>Fudge It</li>
        </ul>
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
            <a class="waves-effect waves-light btn"><input type="submit" value="Submit" /></a>
        </form>
      </div>

    </div>


    {/* <div className = "landing">dgfhh
    </div> */}


    <div className = "trending"> </div>



    <div className = "trendingPics"> </div>


    <div className = "HomeFooter"> </div>

   </div>
   )
 }
}
export default Home;
