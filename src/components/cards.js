import React, { useEffect } from "react"
import { Card, Row, Col } from "react-bootstrap"
import "../css/cards.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faHandsHelping,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ServiceCard = ({ icon, title, description }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      console.log("inView", inView)
      controls.start("visible")
    }
  }, [inView])

  return (
    <Card
      ref={ref}
      as={motion.div}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, translateY: 50 },
        visible: { opacity: 1, translateY: 0 },
      }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <FontAwesomeIcon icon={icon} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
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
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faLaptopCode}
            title="Resources"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
        <Col className="mb-5" xs={12} lg={4}>
          <ServiceCard
            icon={faHandsHelping}
            title="Career Development"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
      </Row>
    </div>
  )
}

export default ServiceCards
