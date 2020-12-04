import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import BigFooter from "./footer"
import "../css/layout.css"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Container className="layout-container" fluid>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container
      style={{
        margin: `0 auto`,
        padding: `0`,
      }} fluid>
        <main>{children}</main>
      </Container>
      <BigFooter />
    </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
