import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import "../css/cards.css"

const membershipCards = () => (
    <div className="service-cards">
        <Row className="m-5">
            <Col className="mb-5" md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Professional</Card.Title>
                        <Card.Text className="text-center">
                        $299/year
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
            <Col className="mb-5" md={6}>
                <Card>
                    <Card.Body>
                    <Card.Title>Student</Card.Title>
                        <Card.Text className="text-center">
                        $99/year
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
        </Row>
    </div>
)

export default membershipCards
