import React from "react";

import Header from "../../components/Header";

import "./styles.css";

const strings = [
  "ingress.codes",
  "regex.ingress.codes",
  "photostructure/exiftool-vendored.js",
  "@kaiilou",
  "@Suburbanno",
];

function About() {
  return (
    <div className="about">
      <Header />
      <div className="body">
        <div className="container">
          <p>Thanks for resources and inspirations!</p>
          {strings.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
