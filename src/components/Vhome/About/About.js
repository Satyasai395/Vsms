import React from "react";
import "./About.css";
import img1 from "../../Asserts/pyton-1024x473.jpg";
import img2 from "../../Asserts/java-2-1024x473.jpg";
import img3 from "../../Asserts/power-bi-1024x473.jpg";
import img4 from "../../Asserts/react-1024x473.jpg";
import img5 from "../../Asserts/devops-1024x473.jpg";
import img6 from "../../Asserts/manual-testing-1024x473.jpg";

function About() {
  return (
    <section id="About">
      <div>
        <div className="heading">
          <h1>Our Featured Courses</h1>
        </div>
        <div className="boxs">
          <figure className="box">
            <img src={img1} alt="" />
          </figure>
          <figure className="box">
            <img src={img2} alt="" />
          </figure>
          <figure className="box">
            <img src={img3} alt="" />
          </figure>
          <figure className="box">
            <img src={img4} alt="" />
          </figure>
          <figure className="box">
            <img src={img5} alt="" />
          </figure>
          <figure className="box">
            <img src={img6} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
