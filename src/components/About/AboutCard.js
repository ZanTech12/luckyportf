import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lucky Ehizojie </span>
            from <span className="purple"> Edo State, Nigeria.</span>
            <br />
            I am currently working as a IoT Developer and Project Director of the Lab (Deno Technology Limited) created by a team of scholarly IT gurus.
            <br />
            I have completed Integrated BTech (BSc.) in Mechanical Engineering, a master's degree in Data Science Management, <br />
            an MBA, and fellowships in business development and management consulting. As a Certified Management Consultant (CMC), project manager, and researcher, I have significantly contributed to multidisciplinary knowledge, with work spanning computational science and management.
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
