import React from "react"
import { Card } from "react-bootstrap";
import "../css/cards.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faHandsHelping, faUsers } from "@fortawesome/free-solid-svg-icons"

const ServiceCards = () => (
    <div className="service-cards">
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
    </div>
)

export default ServiceCards
