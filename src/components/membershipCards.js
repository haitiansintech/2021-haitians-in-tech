import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import "../css/cards.css"

const membershipCards = () => (
    <div className="service-cards">
        <Row className="m-5">
            <Col className="mb-5" md={6}>
                <Card className="PriceTag PriceTag--red">
                    <Card.Body>
                        <Card.Text className="text-center">
                            <p className="price">$50/MO</p>
                            <p>billed quarterly</p>
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
            <Col className="mb-5" md={6}>
                <Card className="PriceTag">
                    <Card.Body>
                        <Card.Text className="text-center">
                            <p className="price price--red">$30/MO</p>
                            <p>billed yearly</p>
                            <div className="PriceTag-ribbon">
                                <i className="PriceTag-ribbonTriangle"></i>
                                <i className="PriceTag-ribbonWrap"></i>
                                Best Deal!
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>
        </Row>
    </div>
)

export default membershipCards
