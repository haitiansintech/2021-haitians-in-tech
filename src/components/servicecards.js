import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import "../css/cards.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faHandsHelping, faUsers } from "@fortawesome/free-solid-svg-icons"

const ServiceCards = () => (
    <div className="service-cards">
        <Row className="m-5">
            <Col className="mb-5" xs={12} lg={4}>
                <Card>
                <FontAwesomeIcon className="font-awesome-icon" icon={faUsers} />
                    <Card.Body>
                        <Card.Title>Networking</Card.Title>
                        <Card.Text>
                        Connect with Haitians from all over the world who are working in tech.
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
            <Col className="mb-5" xs={12} lg={4}>
                <Card>
                <FontAwesomeIcon className="font-awesome-icon" icon={faLaptopCode} />
                    <Card.Body>
                    <Card.Title>Resources</Card.Title>
                        <Card.Text>
                        Access learning resources to develop in your career.
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
            <Col className="mb-5" xs={12} lg={4}>
                <Card>
                <FontAwesomeIcon className="font-awesome-icon" icon={faHandsHelping} />
                    <Card.Body>
                        <Card.Title>Career Development</Card.Title>
                            <Card.Text>
                            Every successful person started with a goal. Access mentors to help you plan the right career moves.
                            </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
        </Row>
    </div>
)

export default ServiceCards
