import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function About() {
  return (
    <div class="about-section">
      <div class="intro-container" id="intro-container">
        <h1 class="text">
          Hi I'm Brooklyn, a web{" "}
          <RoughNotation type="highlight" show={true} color="rgb(244, 214, 244)" iterations={1}>
            developer.
          </RoughNotation>
        </h1>
        <p>I love to combine beauty with functionality.</p>
        <p>
          I'm a full stack web developer with a knowledge of{" "}
          <RoughNotation type="highlight" show={true} color="#7FB7BE70" iterations={1}>React</RoughNotation>, <RoughNotation type="highlight" show={true} color="#FFF7AE" iterations={1}>JavaScript</RoughNotation>
          , and <RoughNotation type="highlight" show={true} color="#DB7F6760" iterations={1}>CSS</RoughNotation>. I became fascinated with computer
          programming when I saw those first two words "Hello World" I had coded
          appear on screen. I had to learn more.
        </p>
        <p>
          I have a <RoughNotation type="highlight" show={true} color="rgb(244, 214, 244)" iterations={1}>strong growth mindset </RoughNotation>and a passion for creating. I'm
          determined to see things through and <RoughNotation type="highlight" show={true} color="#7FB7BE70" iterations={1}>enjoy lifting teams to success </RoughNotation>with my positivity and kindness.
        </p>
        <p>
          I'm currently looking for a new role as a developer. <RoughNotation type="circle" show={true} color="#DB7F6760" iterations={3}>So let's talk!</RoughNotation>
        </p>
        <button
          className="github-button"
          onClick={() =>
            window.open("https://github.com/brooklynlonghurst", "_blank")
          }
        >
          GitHub
        </button>
        <button
          className="linkedin-button"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/brooklyn-longhurst-bb1118268/",
              "_blank"
            )
          }
        >
          LinkedIn
        </button>
      </div>

      <div class="img-container">
        <img
          src={require("./Brooklyn-Longhurst-img.png")}
          alt="Brooklyn Longhurst img"
          class="self-img"
        />
      </div>
    </div>
  );
}

export default About;
