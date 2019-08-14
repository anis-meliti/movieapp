import React, { Component } from 'react'
// **********style*****
import './Movie.css'

// *******img*********
import plus from '../../assets/img/plus (2).png'

// *******style*******
import { Container, Row, Col } from 'react-bootstrap';

class Movie extends Component {
    render() {
        return (
            <Container className='adding-cont'>
                <Row className="image-row" >
                    <Col>
                        <img src={plus} alt='add icon' />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Movie
