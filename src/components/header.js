import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav} from "react-bootstrap";
import Logo from "./logo"
import "../css/navbar.css"


const Header = ({ siteTitle }) => (
  <Navbar className="justify-content-between" bg="primary" variant="dark">
    <div className="nav-logo" href="#home"><Logo />Haitians in Tech</div>
    <Nav className="auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/membership">Membership</Nav.Link>      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/employer">Post a job</Nav.Link>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
