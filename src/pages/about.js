import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import { Col, Container, Row } from "react-bootstrap"
import { graphql } from "gatsby"
import TeamCards from "../components/team"

export const teamQuery = graphql`
  query MyTeam {
    allTeamJson {
      nodes {
        name
        title
        linkedin
        portfolio
        image {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const team = data.allTeamJson
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <h1 className="page-heading">About</h1>
        <Row>
          {team.nodes.map(({ title, name, image, linkedin, portfolio }) => {
            const imageData = image.childImageSharp.fluid

            return (
              <Col md={6} xs={12}>
                <TeamCards
                  title={title}
                  name={name}
                  imageData={imageData}
                  linkedin={linkedin}
                  portfolio={portfolio}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage
