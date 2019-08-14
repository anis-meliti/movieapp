import React, { Component } from 'react'
import MovieList from '../assets/json/Movies.json'
import MovieCard from './Movie/MovieCard.js';
import { Container, Row } from 'react-bootstrap';

class Movies extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {MovieList.map((el, i) => <MovieCard title={el.title} poster={el.poster} rating={el.rating} key={i} />)}
                </Row>
            </Container>
        )
    }
}

export default Movies
