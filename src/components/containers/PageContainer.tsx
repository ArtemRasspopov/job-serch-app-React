import React from "react";
import './PageContainer.scss'

interface pageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<pageContainerProps> = ({ children }) => {
  return <div className="pageContainer">{children}</div>;
};
