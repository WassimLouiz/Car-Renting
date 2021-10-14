import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import "./CarCard.css";
import carZC from '../carZC.png'

class CarCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Card className="Card">
          <CardImg className ="card-img-top" src={carZC} alt="Card image cap" />
          <CardBody className="Card-body">
              <CardTitle className="card-Title">Car Location : {this.props.CarAD.Location}</CardTitle>
              <CardTitle className="card-Title">Agency : {this.props.CarAD.Agency}</CardTitle>
              <CardTitle className="card-Title">Rate : {this.props.CarAD.Rate}</CardTitle>
              <CardSubtitle className="card-Subtitle">Agency Contact : {this.props.CarAD.PhoneNumber}</CardSubtitle>
              <CardSubtitle className="card-Subtitle">Pick Up Date : {this.props.CarAD.PickUpDate}</CardSubtitle>
              <CardSubtitle className="card-Subtitle">Drop Off Date : {this.props.CarAD.DropOffDate}</CardSubtitle>
              <CardSubtitle className="card-Subtitle">Price Per Day : {this.props.CarAD.Price}</CardSubtitle>
              <CardSubtitle className="card-Subtitle">Distance : {this.props.CarAD.Distance}</CardSubtitle>
              <CardText className="card-Text">Description : {this.props.CarAD.Description}</CardText>  
          </CardBody>  
        </Card>
      </div>
    )
  }
}

export default CarCard;