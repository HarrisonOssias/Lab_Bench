import React from 'react';
import Card from 'react-bootstrap/Card'

import '../App.css'

import Icon from '@material-ui/core/Icon';


export default function FeatureCard(props){
    return(
        <Card style={{ width: '18rem', border:'none'}}>
        <div style={{textAlign:'center'}}>
            <Icon style={{fontSize:'200px'}}>{props.icon}</Icon>
        </div>
        
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    )
}