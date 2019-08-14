import React, { Component } from 'react'
// *********Style**********
import { Container, Row, Col, FormLabel } from 'react-bootstrap'
import './MovieCard.css'

// *********image***************


class MovieCard extends Component {
    render() {
        return (
            <Container className='rating-cont'>
                <Row>
                    <Col className='rating-row' >

                        {/* <img src={star} alt='rating star' /> */}
                        <FormLabel>{this.props.rating}</FormLabel>

                    </Col>
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
