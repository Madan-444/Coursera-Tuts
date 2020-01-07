import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import DishDetail from './DishDetailComponent'

import {DISHES} from '../sheared/dishes'
import Menu from './MenuComponents';
import Header from './HeadaerComponent';
import Footer from './FooterComponent';


class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dishes:DISHES,
       selectedDish :null
    }
  }
  
  onDishSelect(dishId) {
      this.setState({
          selectedDish:dishId
      })
  }
  render() {
    return (
      <div >
          <Header />
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>FoodMandu Nepal</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} onclick = {(dishId=> this.onDishSelect(dishId))}/>
        <DishDetail  dish = {this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
        <Footer />
        
      </div>
    );
    }
    
  }

export default Main;



