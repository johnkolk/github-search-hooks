import React from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Card = (props) => {
    return (
        <CardItem>
            <CardItem.Img variant="top" src="holder.js/100px180" />
            <CardItem.Body>
                <CardItem.Title>Card Title</CardItem.Title>
                <CardItem.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </CardItem.Text>
                <Link to={'/profile/'} className="btn btn-primary">
                    Profile
                </Link>
            </CardItem.Body>
        </CardItem>
    );
};
