import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import "./Nav.css"
import { useHistory } from 'react-router-dom';

const Nav = ({purpleMode = false}) => {

  const history = useHistory();

  const handleClick = (permalink) => {
    history.push(permalink);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const iconPath = purpleMode ? 
    "/img/new-home-page/external-link-arrow-white.svg" : 
    "/img/new-home-page/external-link-arrow.svg"

  return (
    <nav className="header__nav">
      <Link onClick={() => handleClick("/docs/intro")} className={clsx("nav__link", {"white-text": purpleMode})}>
        Docs
      </Link>
      <Link onClick={() => handleClick("/blog")} className={clsx("nav__link", {"white-text": purpleMode})}>
        Blog
      </Link>
      <Link onClick={() => handleClick("/research")} className={clsx("nav__link", {"white-text": purpleMode})}>
        Deep Dive
      </Link>
      <Link onClick={() => handleClick("/docs/faq/")} className={clsx("nav__link", {"white-text": purpleMode})}>
        FAQ
      </Link>
      <Link onClick={() => handleClick("https://github.com/panoptic-labs")} className={clsx("nav__link", {"white-text": purpleMode})}>
        Github
        <span className="external-link-arrow">
          <img src={iconPath} alt="arrow"/>
        </span>
      </Link>
    </nav>
  );
};

export default Nav;
