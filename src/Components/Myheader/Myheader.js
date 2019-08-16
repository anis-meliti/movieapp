import React, { Component } from 'react'
// ******Style*********
import './Myheader.css'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'

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
                    <Col>

                    </Col>

                </Row>
            </Container>
        )
    }
}

export default Myheader
