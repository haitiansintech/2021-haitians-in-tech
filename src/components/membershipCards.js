import { motion } from "framer-motion"
import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import AnimatedCard from "./animatedCard"

const membershipCards = () => (
  <div className="service-cards">
    <Row className="m-5">
      <Col className="mb-5" md={6}>
        <AnimatedCard className="PriceTag PriceTag--red">
          <Card.Body>
            <Card.Text className="text-center">
              <p className="price">$50/MO</p>
              <p className="PriceTag-tag">billed quarterly</p>
            </Card.Text>
          </Card.Body>
        </AnimatedCard>
      </Col>
      <Col className="mb-5" md={6}>
        <AnimatedCard className="PriceTag">
          <Card.Body>
            <Card.Text className="text-center">
              <p className="price price--red">$30/MO</p>
              <p className="PriceTag-tag">billed yearly</p>
              <motion.div
                className="PriceTag-ribbon"
                initial={{ opacity: 0, translateY: -100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <i className="PriceTag-ribbonTriangle"></i>
                <i className="PriceTag-ribbonWrap"></i>
                Best Deal!
              </motion.div>
            </Card.Text>
          </Card.Body>
        </AnimatedCard>
      </Col>
    </Row>
  </div>
)

export default membershipCards
