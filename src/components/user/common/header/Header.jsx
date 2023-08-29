import React from "react";
import "./header.scss";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
const Header = () => {
  return (
    <div className="header fixed-top">
      <TopBar />
      <MenuBar />
    </div>
  );
};

export default Header;
