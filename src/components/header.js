// import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "./logo"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import "../css/navbar.css"

const Header = () => {
  const location = useLocation();

  return (
    <Navbar
      className="header justify-content-between"
      bg="light"
      variant="light"
      expand="md"
    >
      <Navbar.Brand className="nav-logo" href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey={location.pathname}>
          <Nav.Item>
            <Link to="/" activeClassName="active" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" activeClassName="active" className="nav-link">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/membership" activeClassName="active" className="nav-link">Membership</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/blog" activeClassName="active" className="nav-link">Blog</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/employer" activeClassName="active" className="nav-link">Post a job</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
