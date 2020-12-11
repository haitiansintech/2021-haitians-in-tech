import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import { Container } from "react-bootstrap"
import Image from "gatsby-image"
import { graphql } from "gatsby"


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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const team = data.allTeamJson
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <h1>About</h1>
        {team.nodes.map(person => (
          <div>
            <Image 
            fluid={person.image.childImageSharp.fluid} 
            alt={person.name}
            />
            <p>{person.name}</p>
            <p>{person.title}</p>
            <a href={`${person.linkedin}`}><p>Linkedin</p></a>
            <a href={`${person.portfolio}`}><p>Portfolio</p></a>               
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export default AboutPage;