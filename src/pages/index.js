import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/form.css"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import { Button, Container, Form } from "react-bootstrap"
import ServiceCards from "../components/cards.js"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const IndexPage = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView])
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        className="masthead"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className="black-overlay">
          <div className="content-box">
            <motion.h1
              animate={{ translateY: 0, opacity: 1 }}
              initial={{ translateY: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Haitians in Tech
            </motion.h1>

            <h3>
              {"Hired and Connected".split("").map((char, index) => (
                <motion.div
                  key={index}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, translateY: 100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ delay: index / 19 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.div>
              ))}
            </h3>
            <Button
              className="bg-btn"
              href="#"
              as={motion.button}
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join our newsletter
            </Button>
            <Button
              className="bg-btn"
              href="#"
              as={motion.button}
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hire us for Recruitment
            </Button>
          </div>
        </div>
      </BackgroundImage>
      <Container className="who-we-are pt-5" fluid>
        <motion.h1
          className="p-3"
          ref={ref}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, translateY: 50 },
            visible: { opacity: 1, translateY: 0 },
          }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Who We Are
        </motion.h1>
        <p className="pb-3">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <ServiceCards />
      </Container>
      <Container className="form-section" fluid>
        <div className="form-content">
          <h1 className="form-title">Subscribe to our newsletter</h1>
          <p className="form-text">
            Get the latest job openings, upcoming events, valuable resources and
            opportunities in your inbox bi-weekly!
          </p>
        </div>
        <Container className="form">
          <Form>
            <Form.Group controlId="formGroupEmail" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
}

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "coding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
