import React, { Component } from 'react'
import MovieList from '../assets/json/Movies.json'
import MovieCard from './Movie/MovieCard.js';
import { Container, Row, Col } from 'react-bootstrap';

class Movies extends Component {
    render() {
        return (
            <Col>
                {MovieList.map((el, i) => <MovieCard title={el.title} poster={el.poster} rating={el.rating} key={i} />)}
            </Col>
        )
    }
}

export default Movies
