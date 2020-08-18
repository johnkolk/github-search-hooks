import React from 'react';
import { Spinner as SpinnerBootstrap } from 'react-bootstrap';

export const Spinner = () => {
    return (
        <SpinnerBootstrap animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </SpinnerBootstrap>
    );
};
