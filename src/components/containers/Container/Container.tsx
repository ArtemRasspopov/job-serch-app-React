import React from "react";
import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container">{children}</div>
);
