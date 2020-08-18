import React from 'react';
import { Card } from 'react-bootstrap';

export const Repos = ({ repos }) => (
    <React.Fragment>
        {repos.map((repo) => (
            <div className="col-4 mb-4" key={repo.id}>
                <Card bg="light" text="dark">
                    {/*<Card.Header>Header</Card.Header>*/}
                    <Card.Body>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Card.Title>{repo.name}</Card.Title>
                        </a>
                        {repo.description && (
                            <Card.Text>{repo.description}</Card.Text>
                        )}
                    </Card.Body>
                </Card>
            </div>
        ))}
    </React.Fragment>
);
