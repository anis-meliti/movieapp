import React, { Component } from 'react'
import MovieCard from './Movie/MovieCard.js';
import { Container, Row } from 'react-bootstrap';

class Movies extends Component {

    render() {
        return (

            <Container>
                <Row>

                    {this.props.MovieList.map((el, i) => <MovieCard title={el.title} poster={el.poster} rating={el.rating} key={i} />)}
                </Row>
            </Container>
        )
    }
}

export default Movies
