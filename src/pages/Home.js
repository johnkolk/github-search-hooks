import React, { useContext } from 'react';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { GithubContext } from '../context/github/githubContex';
import { Spinner } from '../components/Spinner';

export const Home = (props) => {
    const { loading, users } = useContext(GithubContext);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-5">
                    <Search />
                </div>
            </div>
            <div className="row pt-5">
                {loading ? (
                    <Spinner />
                ) : (
                    users.map((user) => (
                        <div key={user.id} className="col-sm-6 col-lg-4 mb-3">
                            <Card user={user} />
                        </div>
                    ))
                )}
            </div>
        </React.Fragment>
    );
};
