import React from 'react';
import { Search } from '../components/Search';
import { Card } from '../components/Card';

export const Home = (props) => {
    const cards = new Array(15).fill('').map((_, i) => i);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-5">
                    <Search />
                </div>
            </div>
            <div className="row pt-5">
                {cards.map((card) => (
                    <div key={card} className="col-sm-4 mb-3">
                        <Card />
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};
