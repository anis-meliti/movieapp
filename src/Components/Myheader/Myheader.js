import React, { Component } from 'react'
// ******Style*********
import './Myheader.css'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
// ********Star rating******
import StarRatingComponent from 'react-star-rating-component'


class Myheader extends Component {
    render() {
        return (
            <Container className="header-cont">
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl name='searchBox'
                                placeholder="Search movie by name...."
                                onChange={this.props.search}
                            />
                            <InputGroup.Append>
                                <Button
                                    variant="outline-secondary"
                                    className="searchbtn"

                                ></Button>
                            </InputGroup.Append>
                        </InputGroup>

                    </Col>
                    <Col >
                        <StarRatingComponent className="star-rating"
                            name="rate1"
                            starCount={5}
                            starRatedColor="yellow"
                            onStarClick={this.props.rating.bind(this)}
                            numberOfStars={5}
                            value={0}

                        />
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default Myheader
