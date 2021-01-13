import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import "../css/cards.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faHandsHelping,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import AnimatedCard from "./animatedCard"

const ServiceCard = ({ icon, title, description, animationDelay }) => {
  return (
    <AnimatedCard delay={animationDelay} className="custom-card">
      <FontAwesomeIcon color="#d40d2c" icon={icon} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </AnimatedCard>
  )
}

const ServiceCards = () => {
  return (
    <div className="service-cards">
      <Row className="m-5">
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faUsers}
            title="Networking"
            description="Connect with Haitians from all over the world who are working in tech."
          />
        </Col>
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faLaptopCode}
            title="Resources"
            description="Access learning resources to develop in your career."
            animationDelay={0.2}
          />
        </Col>
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faHandsHelping}
            title="Career Development"
            description="Every successful person started with a goal. Access mentors to help you plan the right career moves."
            animationDelay={0.3}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ServiceCards
