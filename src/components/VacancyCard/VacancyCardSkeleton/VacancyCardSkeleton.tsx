import React from "react";
import "./VacancyCardSkeleton.scss";

interface VacancyCardSkeletonProps {
  size?: "small" | "big";
}

export const VacancyCardSkeleton: React.FC<VacancyCardSkeletonProps> = ({
  size = "small",
}) => {
  return <div className={`vacancyCardSkeleton skeleton ${size === 'big' && '--big'}`}></div>;
};
