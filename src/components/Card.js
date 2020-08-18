import React from 'react';
import { Card as CardItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Card = ({ user }) => {
    return (
        <CardItem>
            <CardItem.Img
                variant="top"
                src={user.avatar_url}
                alt={user.login}
            />
            <CardItem.Body>
                <CardItem.Title>{user.login}</CardItem.Title>
                <Link to={'/profile/' + user.login} className="btn btn-primary">
                    Profile
                </Link>
            </CardItem.Body>
        </CardItem>
    );
};
