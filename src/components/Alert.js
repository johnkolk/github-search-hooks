import React, { useContext } from 'react';
import { Alert as AlertBootstrap } from 'react-bootstrap';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    if (!alert) return null;

    return (
        <AlertBootstrap
            variant={'secondary'}
            onClose={() => {
                hide();
            }}
            dismissible
        >
            {alert.text}
        </AlertBootstrap>
    );
};
