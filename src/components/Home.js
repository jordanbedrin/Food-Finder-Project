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
          <li><a class="waves-effect waves-teal btn-flat">Search</a></li>
          <li>Favorites</li>
          <li>Trending</li>
          <li>Fudge It</li>
        </ul>
      </nav>
    </div>


    <div className = "CallToAction">
      <div className="logo"> 
        <img src="http://oi67.tinypic.com/13z0pqv.jpg" alt="logo pic"/> 
      </div>
     
      <div className="Homeform">
        <form>
          <label> 
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
      
    </div>


    {/* <div className = "landing">dgfhh 
    </div> */}
      

    <div className = "trending"> </div>



    <div className = "trendingPics"> </div>


    {/* 

    <div className = ""> </div> */}

   </div>
   )
 }
}
export default Home;
