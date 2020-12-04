import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav} from "react-bootstrap";
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
    <Nav className="auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Membership</Nav.Link>      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Post a job</Nav.Link>
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
