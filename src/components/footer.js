import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css"

const Footer = () => (
    <Container className="footer" fluid>
        <Row>
            <Col>Column 1</Col>
            <Col>Column 2</Col>
            <Col>Column 3</Col>
        </Row>
        <Row>
            <Col>Column 4</Col>
            <Col>Column 5</Col>
            <Col>Column 6</Col>
        </Row>
        <Row className="text-center p-5">
            <Col>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>            
            </Col>
        </Row>
    </Container>
)

export default Footer
