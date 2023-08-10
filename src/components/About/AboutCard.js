import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="blue">Mayuri G</span>
            <span className="blue"> from Coimbatore, TamilNadu, India.</span>
            <br /><span className="purple">I am a pre-final year student in Kumaraguru College Of Technology and currently pursuing my degree in B.Tech Artificial Intelligence and Data Science</span>
            <br />
            Additionally, now I am learning three.js, ReactJS and Cloud Computing.
            <br />
            <br />
            Apart from my academics I am passionate about various stuffs.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
          </ul>

          <p style={{ color: "rgb(126, 155, 172)" }}>
            "Follow the heart"{" "}
          </p>
          <footer className="blockquote-footer">Mayuri G</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
