import React from "react";

export default function Header() {
  return (
    <header  className="header">
      <div className="header__content">
        <div className="header__logo">
          <div className="header__logo-img">
            <img src="https://i.pravatar.cc/40" alt="img" />
          </div>
          <span className="header__logo-sub">Daniel nguyen</span>
        </div>
        <div className="header__navbar">
          <ul>
            <li>
              <a className="header__link" href="#home">home</a>
            </li>
            <li>
              <a className="header__link" href="#about">about</a>
            </li>
            <li>
              <a className="header__link" href="#project">project</a>
            </li>
            <li>
              <a className="header__link" href="#contact">contact</a>
            </li>
            <li>
              <a className="header__link" href="#home">download my cv</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
