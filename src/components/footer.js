import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css"
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faTwitterSquare, faInstagramSquare, faTwitch } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
    <div className="footer">
        <Container fluid>
            <Row>
                <Col>
                    <div><Logo /></div>
                    <h5>HaitiansinTech.com</h5>
                </Col>
                <Col>
                    <h5 className="title">Contact Us</h5>
                    <ul className="list-unstyled">
                        <li>
                        Press/Partnerships: <a className="footer-links" href="mailto:team@haitiansintech.com">team@haitiansintech.com</a>
                        </li>
                        <li>
                        Share a conference discount with this <a className="footer-links" href="#!">form.</a>
                        </li>
                        <li>
                        Copyright Haitians in Tech© 2020
                        </li>
                        <li>
                            <a className="footer-links" href="#!">Haitians in Tech Code of Conduct</a>
                        </li>
                        <li>
                            <a className="footer-links" href="#!">Privacy Policy & Terms of service</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <h5 className="title">Connect with us</h5>
                    <div className="social-media">
                        <div>
                            <a href="https://github.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faGithubSquare} />
                            </a>
                        </div>
                        <div>
                            <a href="https://twitter.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faTwitterSquare} />
                            </a>
                        </div>
                        <div>
                            <a href="https://instagram.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faInstagramSquare} />
                            </a>
                        </div>
                        <div>
                            <a href="https://twitch.com/haitiansintech">
                                <FontAwesomeIcon className="social-icons" icon={faTwitch} />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <div>
                <Container className="text-center pt-3" fluid>
                © {new Date().getFullYear()}, Built by
                {` `}
                <a href="https://www.thestartuplife.us">The Startup Life</a>            
                </Container>
            </div>
        </Container>  
    </div>

)

export default Footer
