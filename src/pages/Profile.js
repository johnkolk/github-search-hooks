import React, { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/githubContex';
import { Spinner } from '../components/Spinner';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export const Profile = ({ match }) => {
    const { getUser, getRepos, loading, user, repos } = useContext(
        GithubContext,
    );
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />;
    }

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
    } = user;

    return (
        <div className="container">
            <div className="row">
                <Link to="/" className="btn btn-link">
                    Go to home
                </Link>
            </div>
            <div className="row mt-4">
                <div className="col-2">
                    <Image src={avatar_url} className="img-fluid" rounded />
                    <div className="mt-3">{company}</div>
                    <div>{location}</div>
                </div>
                <div className="col pl-4">
                    <div className="h2">{name}</div>
                    <div className="mb-2">{bio}</div>
                    <div className="badge badge-primary">
                        Followers: {followers}
                    </div>
                    <div className="badge badge-success ml-2">
                        Following: {following}
                    </div>
                    <div className="badge badge-info ml-2">
                        Repositories: {public_repos}
                    </div>
                    <div className="badge badge-dark ml-2">
                        Gists: {public_gists}
                    </div>
                    <div className="mt-4">
                        <ul className="list-unstyled">
                            {login && <li>Username: {login}</li>}
                            {blog && <li>Website: {blog}</li>}
                        </ul>
                        <a
                            href={html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open profile
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row mt-5">{repos.join()}</div>
        </div>
    );
};
