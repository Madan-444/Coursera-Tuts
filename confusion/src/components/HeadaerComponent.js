import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">FoodMandu Nepal</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>Since 2008, we’ve literally run millions of food advertising creatives for thousands of food brands around the world.</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;