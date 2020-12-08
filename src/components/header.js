// import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./logo"
import "../css/navbar.css"


const Header = () => (
  <Navbar className="header justify-content-between" bg="light" variant="light"expand="md">
    <Navbar.Brand className="nav-logo" href="/"><Logo /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/membership">Membership</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/employer">Post a job</Nav.Link>
      </Nav>      
    </Navbar.Collapse>
  </Navbar>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
