import React from "react";

interface ArrowIconProps {
  color?: "default" | "active";
  size?: "big" | "small";
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  color = "default",
  size = "big",
}) => (
  <>
    {size === "big" ? (
      <svg
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1"
          stroke={color === "default" ? "#ACADB9" : "#5E96FC"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ) : (
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.49994 1.5L4.60946 4.16531C4.83416 4.3579 5.16572 4.3579 5.39041 4.16531L8.49994 1.5"
          stroke={color === "default" ? "#ACADB9" : "#5E96FC"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )}
  </>
);
