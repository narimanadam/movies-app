import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import MovieItem from './MovieItem';
import { ThumbnailStyled } from './styles/ThumbnailStyled';

const MOVIES_QUERY = gql`
    query MOVIES_QUERY {
        movies {
            id
            name
            category
            image
        }
    }
`

class Movies extends Component {
    render() {
        return (
            <div className="container">
                <ThumbnailStyled>
                    <Query query={MOVIES_QUERY}>
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading ...</p>
                            if (error) return <p>Error: ${error}</p>
                            return data.movies.map(({ id, name, category, image }) => <MovieItem name={name} category={category} key={id} image={image} />)
                        }}
                    </Query>
                </ThumbnailStyled>
            </div>
        );
    }
}

export default Movies;