import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export const About = (props) => {
    return (
        <Jumbotron fluid>
            <Container className="px-5">
                <h1>Info</h1>
                <p>Application version v0.1</p>
            </Container>
        </Jumbotron>
    );
};
