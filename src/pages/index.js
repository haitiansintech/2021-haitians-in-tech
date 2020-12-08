import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/form.css"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import { Button, Container, Form } from "react-bootstrap"
import ServiceCards from "../components/cards.js"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImage className="masthead"
    fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className="black-overlay">
        <div className="content-box">
          <h1>Haitians in Tech</h1>
          <h3>Hired and Connected</h3>
          <Button className="bg-btn" href="#">Join our newsletter</Button>
        <Button className="bg-btn" href="#">Hire us for Recruitment</Button>
        </div>
      </div>
    </BackgroundImage>
    <Container className="who-we-are pt-5" fluid>
      <h1 className="p-3">Who We Are</h1>
      <p className="pb-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <ServiceCards />
    </Container>
    <Container className="form-section" fluid>
      <div className="form-content">
        <h1 className="form-title">Subscribe to our newsletter</h1>
        <p className="form-text">Get the latest job openings, upcoming events, valuable resources and opportunities in your inbox bi-weekly!</p>
      </div>
      <Container className="form">
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>        
      </Container>
    </Container>
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "coding.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
