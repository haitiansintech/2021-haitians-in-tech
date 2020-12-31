import React from "react"
import Img from "gatsby-image"
import { Card } from "react-bootstrap";


const TeamCards = ({ imageData, name, title, linkedin, portfolio }) => (
  <div className="team-section h-100 pb-5">
    <Card className="team-cards">
    <Img fluid={imageData} alt={name} />
      <Card.Body className="team-card-body">
        <p>{name}</p>
        <p>{title}</p>
        <p>
          <a href={`${linkedin}`}>Linkedin</a>
        </p>
        <p>
          <a href={`${portfolio}`}>Portfolio</a>
        </p>
      </Card.Body>
    </Card>
  </div>
)

export default TeamCards
