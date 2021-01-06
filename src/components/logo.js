import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../css/navbar.css"

const Logo = () => {
  const data = useStaticQuery(graphql`
  query MyLogo {
    file(relativePath: {eq: "hit-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img className="navbar brand" alt="logo" loading="eager" fixed={data.file.childImageSharp.fixed} />
}

export default Logo
