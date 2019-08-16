import React, { Component } from 'react'
// **********style*****
import './Movie.css'

// *******img*********
import plus from '../../assets/img/plus (2).png'

// *******style*******
import { Container, Row, Col } from 'react-bootstrap';


import Popup from 'reactjs-popup';
import AddnewMovie from '../../AddNewMovie';


class Movie extends Component {
  render() {
    return (
      <Popup trigger={
        <Container className='adding-cont'  >
          <Row className="image-row" >
            <Col>
              <img src={plus} alt='add icon' />
            </Col>
          </Row>
        </Container>} on='click' close modal >
        <AddnewMovie handler={this.props.handler} />
      </Popup>

    )

  }
}

export default Movie
