import React from "react"
import { Container, Col, Row, Button } from "react-bootstrap";
import "../css/index.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const Hero = () => {

  const data = useStaticQuery(graphql`
  query MyHero {
    file(relativePath: {eq: "Black Man Working on Analytics.png"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <Container className="hero" fluid>
    <Row>
        <Col>
            <h1>Haitians in Tech</h1>
            <h2>Hired and connected</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
            <Button href="#">Join our newsletter</Button>
            <Button href="#">Hire us for Recruitment</Button>
            </div>
        </Col>
        <Col>Picture not found</Col>
    </Row>
  </Container>
  }

  return  <Container className="hero" fluid>
  <Row>
      <Col>
          <h1>Haitians in Tech</h1>
          <h2>Hired and connected</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Row>
            <Col>
              <Button href="#">Join our newsletter</Button>
            </Col>
            <Col>
              <Button href="#">Hire us for Recruitment</Button>
            </Col>
          </Row>
      </Col>
      <Col><Img fluid={data.file.childImageSharp.fluid} /></Col>
  </Row>
</Container>
}


export default Hero
