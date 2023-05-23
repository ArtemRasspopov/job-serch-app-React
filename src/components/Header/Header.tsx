import React from "react";
import "./Header.scss";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { Container } from "../containers/Container/Container";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Container>
        <div className="header__inner">
          <Link to={"/"}>
            <LogoIcon />
          </Link>
          <HeaderMenu />
        </div>
      </Container>
    </div>
  );
};
