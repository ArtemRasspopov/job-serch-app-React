import React from "react";
import "./Header.scss";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { PageContainer } from "../containers/PageContainer/PageContainer";


export const Header: React.FC = () => {
  return (
    <div className="header">
      <PageContainer>
        <div className="header__inner">
          <LogoIcon />
          <HeaderMenu />
        </div>
      </PageContainer>
    </div>
  );
};

