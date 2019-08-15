import React, { Component } from 'react'
import { Container, Col, Row, FormControl, Button } from 'react-bootstrap'

class AddnewMovie extends Component {

    state = {

        movieName: '',
        moviePoster: '',
        movieRating: ''
    }

    onChangeHandler = event => this.setState({ [event.target.id]: event.target.value })
    resetField = () => this.setState({
        movieName: '',
        moviePoster: '',
        movieRating: ''
    })


    render() {
        return (
            <Container className='popup-cont'>
                <Row>
                    <FormControl placeholder="Movie Name" id="movieName" onChange={this.onChangeHandler} value={this.state.movieName.value} ></FormControl>
                </Row>
                <Row>
                    <FormControl placeholder="Poster's movie URL" id="moviePoster" onChange={this.onChangeHandler} value={this.state.movieName.value} ></FormControl>
                </Row>
                <Row>
                    <FormControl placeholder="Movie's rating" id="movieRating" onChange={this.onChangeHandler} value={this.state.movieName.value}></FormControl>
                </Row>
                <Row>
                    <Col sm={{ span: 2, offset: 1 }}>
                        <Button variant="success">Add</Button>
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={this.resetField}>Reset</Button>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default AddnewMovie
