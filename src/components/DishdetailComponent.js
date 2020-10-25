import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail  extends Component{
    constructor(props){
        super(props);
    }

    render(){

        
        if (this.props.selectedDish != null){
            const menu = this.props.selectedDish.comments.map((dish) => {
                return (
                    
                    <div>
                        {dish.comment}
                        <br/><br/>
                        <p>
                            --{dish.author} , {dish.date}
                        </p>
                        
                    </div>    
                );
            }); 


            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                        <CardTitle>{this.props.selectedDish.name}</CardTitle>
                        <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {menu}
                    </div>
                </div>
            );
                    }
        else{
            return(
                <div></div>
            )
        }
    }
} 

export default DishDetail ;