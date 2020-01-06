import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import DishDetailComponent from './DishDetailComponent'
class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDisc: null
        }
    }
    onDishSelect(dish){
        this.setState({
            selectedDisc:dish
        })
        // console.log(this.state.dish)
    }
    render() {
        const { dishes } = this.props
        const menu = dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        <CardImg width="1000" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>

                        </CardImgOverlay>
                        {/* </CardImg>                         */}
                    </Card>

                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className='row'>
                    <DishDetailComponent dish = {this.state.selectedDisc} />
                </div>
            </div>

        );
    }
}

export default Menu
