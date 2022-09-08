import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__title">
          <h1>About me</h1>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>
        <div className="about__content">
          <div className="about__content-personal">
            <h2 className="title">Knowing more about me!</h2>
            <p>
              I'm a <b>Front-End Web Developer</b> building the Front-end of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the <b>Projects</b>{" "}
              section.
            </p>
            <p>
              I'm <b>open</b> to Job opportunities where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don't hesitate to <b>contact</b> me.
            </p>
            <a href="#index" className="btn">
              Contact
            </a>
            <a href="#index" className="btn">
              My Resumé
            </a>
          </div>
          <div className="about__content-skills">
            <h2 className="title">Skills and Technologies</h2>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">SASS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">Github</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">Redux</div>
              <div className="skills__skill">Boostrap</div>
              <div className="skills__skill">Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
