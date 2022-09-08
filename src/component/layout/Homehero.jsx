import React from "react";
import homerheroImg from "../../assets/img/homehero.jpeg";

export default function Homehero() {
  return (
    <section id="index" className="home-hero">
      <div className="container">
        <div className="home-hero__content">
          <h1>
            <span> hi there! i'm</span>
            <br /> daniel <span className="text"> nguyen</span>
          </h1>
          <p>
            <span>A Front-End Web Developer</span> passionate about creating
            interactive applications and experiences on the web.
          </p>
          <a href="#project" className="btn">
            Let's talk
          </a>
        </div>
        <div className="home-hero__img">
          <div className="outer-circle">
            <i class="fa-brands fa-react child1"></i>
            <i class="fa-solid fa-code child2"></i>
            <i class="fa-brands fa-js child3"></i>
            <i class="fa-brands fa-css3-alt child4"></i>
          </div>
          <div className="inner-circle">
            <img src={homerheroImg} alt="img" />
          </div>
        </div>
      </div>
      <div className="home-hero__socials">
        <div class="home-hero__social">
          <a href="#home" class="home-hero__social-icon-link">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#home" class="home-hero__social-icon-link">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#home" class="home-hero__social-icon-link">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#home" class="home-hero__social-icon-link">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
