import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import { Container } from "react-bootstrap"
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
              srcSet
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
      <h1 className="page-heading">About</h1>  
        {team.nodes.map(person => {
          const title = person.title;
          const name = person.name;
          const imageData = person.image.childImageSharp.fluid;
          const linkedin = person.linkedin;
          const portfolio = person.portfolio;

          return (
            <TeamCards 
            title={title}
            name={name}
            imageData={imageData}
            linkedin={linkedin}
            portfolio={portfolio}
          />
          );
      })}
      </Container>
    </Layout>
  )
}

export default AboutPage;