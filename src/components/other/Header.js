import React, { useState } from "react";
import Link from "@docusaurus/Link";

import useResponsive from "../../hooks/useResponsive";
import "./Header.css";
import "./Header/RightPart.css"
import Nav from "./Header/Nav";
import Sidebar from "./Sidebar";
import Button from "../NewHomePage/Button/Button";

const Header = () => {
  const [isOpenedSidebar, setOpenedSidebar] = useState(false);
  const { loadedWidth, isTabletWidth } = useResponsive();
  const logoPath = `/img/logo-mono.svg`;

  const handleToggle = () => {
    setOpenedSidebar((state) => !state);
  };

  const handleClose = () => {
    setOpenedSidebar(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header__logo">
            <img src={logoPath} alt="logo" />
          </Link>
          {loadedWidth && !isTabletWidth && <Nav />}
          <div className="right-part">
            {loadedWidth && isTabletWidth && (
              <div className="mobile-button" onClick={handleToggle}>
                <i className="icon__burger right-part__icon" />
              </div>
            )}
            {loadedWidth && !isTabletWidth && (
              <Button disabled={true}>
                {"App Coming Soon"}
              </Button>
            )}
          </div>
        </div>
      </header>
      {isTabletWidth && (
        <Sidebar
          isOpenedSidebar={isOpenedSidebar}
          onClose={handleClose}
          onToggle={handleToggle}
        />
      )}
    </>
  );
};

export default Header;
