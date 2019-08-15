import React, { Component } from 'react'
import MoviesList from '../assets/json/Movies.json'
import MovieCard from './Movie/MovieCard.js';
import { Container, Row } from 'react-bootstrap';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            MovieList: MoviesList,
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.state.MovieList.map((el, i) => <MovieCard title={el.title} poster={el.poster} rating={el.rating} key={i} />)}
                </Row>
            </Container>
        )
    }
}

export default Movies
