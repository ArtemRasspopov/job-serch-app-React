import React from "react";
import "./SkeletonBlock.scss";

interface SkeletonBlockProps {
  width?: string;
  height?: string;
}

export const SkeletonBlock: React.FC<SkeletonBlockProps> = ({
  width = "100%",
  height = "100%",
}) => {
  return <div className="skeletonBlock" style={{ width, height }}></div>;
};
