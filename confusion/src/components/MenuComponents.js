import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
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
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                <CardImg width="100" src={dish.image} alt={dish.name} />
                <CardBody>
                    
                    <CardTitle> {dish.name} </CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
           
           )
        } 
        else {
            return <div></div>
        }
     
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

                    {this.renderDish(this.state.selectedDisc)}
                </div>
            </div>

        );
    }
}

export default Menu