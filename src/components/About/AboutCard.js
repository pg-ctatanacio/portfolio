import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cris Atanacio </span>
            from <span className="purple"> Manila, Philippines.</span>
            <br />
            I am currently employed as a software developer at Puregold Price Club Inc.
            <br />
            I have completed Bachelor of Science in Information Technology (BSIT) at City
            of Malabon University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking & Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga/Manhwa
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make it work, make it right, make it fast."{" "}
          </p>
          <footer className="blockquote-footer">Kent Beck</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
