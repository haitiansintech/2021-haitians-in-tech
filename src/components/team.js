import React from "react"
import Img from "gatsby-image"

const TeamCards = ({ imageData, name, title, linkedin, portfolio }) => (
  <div className="team-section">
    <Img fluid={imageData} alt={name} objectFit="contain" />
    <div>
      <h5>{name}</h5>
      <p style={{ opacity: 0.6 }}>{title}</p>
      <p>
        <a href={`${linkedin}`}>Linkedin</a>
      </p>
      <p>
        <a href={`${portfolio}`}>Portfolio</a>
      </p>
    </div>
  </div>
)

export default TeamCards
