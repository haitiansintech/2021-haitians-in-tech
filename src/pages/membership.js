import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import "../css/membership.css"
import Cards from "../components/membershipCards"
import { Container, Button, Row, Col } from "react-bootstrap"
import BgImage from "../components/bgimage.js"


const MembershipPage = (props) => (
  <Layout>
    <SEO title="Membership" />
    <Container className="text-center p-5 membership-section" fluid>
      <h1>Apply to be a Member</h1>
      <p>If you're interested in joining the paid community, please fill out an application.</p>
      <Button className="bg-btn" href="#">Apply Now</Button>
    </Container>
    <Container>
      <h1 className="text-center pt-5">Membership Dues</h1>
      <Cards />      
    </Container>
    <Container className="membership-section" fluid>
    <Container>
      <Row>
        <Col>
          <h5>What do Members get?</h5>
          <BgImage/>
        </Col>
        <Col className="membership-bullet">
          <div>
            <ul>
            <li><i>👑</i> Networking in our private online community.</li>
            <li><i>📺</i> All access pass to weekly webinars.</li>
            <li><i>🏆️</i> Weekly goal setting and monthly challenges to keep you motivated all year long.</li>
            <li><i>🎁</i> Curated perks including discounted conferences, coding classes, and more.</li>
            <br></br>
            <br></br>
            <br></br>
            <li><h5>...All for less than the price of one conference.</h5></li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </Container>
    <Container className="text-center p-5" fluid>
      <h1>WANT TO BECOME A FOUNDING MEMBER?</h1>
      <p>Become a member of Haitians in Tech and get notified as soon as Founding Membership opens up.</p>
      <Button className="bg-btn" href="#">Join Haitians in Tech</Button>
    </Container>
  </Layout>
)

export default MembershipPage;
