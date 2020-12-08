import React from "react"
import { Card, Row, Col } from "react-bootstrap";
import "../css/cards.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faHandsHelping, faUsers } from "@fortawesome/free-solid-svg-icons"

const ServiceCards = () => (
    <div className="service-cards">
        <Row>
            <Col className="col-md-12 col-lg-4">
                <Card style={{ width: '18rem' }}>
                <FontAwesomeIcon icon={faUsers} />
                    <Card.Body>
                        <Card.Title>Networking</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
            <Col className="col-md-12 col-lg-4">
                <Card style={{ width: '18rem' }}>
                <FontAwesomeIcon icon={faLaptopCode} />
                    <Card.Body>
                    <Card.Title>Resources</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
            <Col className="col-md-12 col-lg-4">
                <Card style={{ width: '18rem' }}>
                <FontAwesomeIcon icon={faHandsHelping} />
                    <Card.Body>
                        <Card.Title>Career Development</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
        </Row>
    </div>
)

export default ServiceCards
