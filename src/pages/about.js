import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/about.css"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"
import TeamCards from "../components/team.js"
import BgImage from "../components/bgimage.js"

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
            fluid(maxWidth: 200, maxHeight: 200, quality: 100, cropFocus: CENTER, fit: COVER ) {
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
      <BgImage />
      <h1 className="page-heading p-5">About</h1>
      <Container className="pb-5 team-container" fluid>
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
