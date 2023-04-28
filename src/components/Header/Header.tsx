import React from "react";
import "./Header.scss";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

const Header: React.FC = () => {
  return (
    <div className="header">
      <LogoIcon />
      <HeaderMenu/>
    </div>
  );
};

export default Header;
