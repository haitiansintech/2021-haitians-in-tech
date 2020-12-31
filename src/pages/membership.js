import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.css"
import Cards from "../components/membershipCards"
import { Container } from "react-bootstrap"


const MembershipPage = (props) => (
  <Layout>
    <SEO title="Membership" />
    <h1 className="text-center pt-5">Memberships</h1>
    <Container>
     <Cards />      
    </Container>
  </Layout>
)

export default MembershipPage;
