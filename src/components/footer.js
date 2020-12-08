import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css"

const Footer = () => (
    <div className="footer">
        <Container fluid>
            <Row>
                <Col>
                    <h5 className="title">Footer Content</h5>
                    <p>
                    Here you can use rows and columns here to organize your footer
                    content.
                    </p>
                </Col>
                <Col>
                    <h5 className="title">Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h5 className="title">Links</h5>
                    <ul className="list-unstyled">
                    <li>
                    <a href="#!">Link 1</a>
                    </li>
                    <li>
                    <a href="#!">Link 2</a>
                    </li>
                    <li>
                    <a href="#!">Link 3</a>
                    </li>
                    <li>
                    <a href="#!">Link 4</a>
                    </li>
                    </ul>
                </Col>
            </Row>
            <div>
                <Container className="text-center pt-3" fluid>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>            
                </Container>
            </div>
        </Container>  
    </div>

)

export default Footer
