import React, { Component } from 'react'
// *********Style**********
import { Container, Row } from 'react-bootstrap'
import './MovieCard.css'

// *********image***************
import StarRatingComponent from 'react-star-rating-component'

class MovieCard extends Component {
    render() {
        return (
            <Container className='rating-cont'>
                <Row className="rating-row">

                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={parseInt(this.props.rating)}
                    />

                </Row>
                <Row >
                    <img src={this.props.poster} alt='movie poster' className="movie-poster" />
                </Row>
                <Row className="movie-title">
                    {this.props.title}
                </Row>
            </Container>

        )
    }
}

export default MovieCard
