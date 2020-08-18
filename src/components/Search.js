import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContex';

export const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        event.preventDefault();
        github.clearUsers();

        if (value.trim()) {
            alert.hide();
            github.search(value.trim());
        } else {
            alert.show('Please enter username.');
        }
    };

    return (
        <Form>
            <Form.Group controlId="search">
                <Form.Control
                    type="text"
                    placeholder="Enter username ..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyPress={onSubmit}
                />
                <Form.Text className="text-muted">
                    Enter username on GitHub and we are go to search!
                </Form.Text>
            </Form.Group>
        </Form>
    );
};
