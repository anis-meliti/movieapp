import React, { Component } from 'react'
import { Container, Col, Row, FormControl, Button } from 'react-bootstrap'

class AddnewMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            rating: ''
        }
    }


    onChangeHandler = event => {

        this.setState({ [event.target.id]: event.target.value })
    }
    render() {
        console.log(this.state)
        return (
            <Container className='popup-cont'>
                <Row>
                    <FormControl placeholder="Movie Name" id="title" onChange={this.onChangeHandler}  ></FormControl>
                </Row>
                <Row>
                    <FormControl placeholder="Poster's movie URL" id="poster" onChange={this.onChangeHandler}  ></FormControl>
                </Row>
                <Row>
                    <FormControl type='number' placeholder="Movie's rating" id="rating" onChange={this.onChangeHandler} ></FormControl>
                </Row>
                <Row>
                    <Col sm={{ span: 2, offset: 1 }}>

                        <Button variant="success" onClick={() => this.props.handler(this.state)} >Add</Button>
                    </Col>
                </Row>
            </Container >

        )
    }
}


export default AddnewMovie
