import React from 'react';
import Card from 'react-bootstrap/card';

export const ActivityCard = (props) => {
    return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
        {props.skillLevel}
        {props.about}
    </Card.Body>
    </Card>
    </>
    )
}

export const ChooseActivity = (props) => {

    return (
        <div className="block-example border border-warning m-2 text-justify" style={{display: 'inline-block', width: '10rem', height: '8rem'}} onClick={props.onClick}>
            {props.name}
        </div>
    )
}