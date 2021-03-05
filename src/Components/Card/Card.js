import React from 'react';
import { Button, Card } from 'react-bootstrap';


const card = (props) => {


    const { Name, Salary, Currency, Image } = props.footballPlayer;
    const cardStyle = { display: 'floatRight' }
    return (

        <div className='container' style={cardStyle}>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                    <Card.Title>{Name} </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>

                    <h4>Salary for Hire : {Salary} </h4>
                    <h5>Currency: {Currency}</h5>
                    <Button variant="primary">Select the Player</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default card;