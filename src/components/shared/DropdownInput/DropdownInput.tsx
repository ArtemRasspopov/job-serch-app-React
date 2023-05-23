import React, { useEffect, useRef, useState } from "react";
import "./DropdownInput.scss";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";

interface DropdownInputProps {
  data?: String[];
  activeItem?: number;
  onChange?: (index: number) => void;
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  data = [],
  activeItem = 0,
  onChange,
}) => {
  const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeItem) {
      setDropdownIsActive(false);
    }
  }, [activeItem]);

  const clickOutsideHandler = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownIsActive(false);
    }
  };

  useEffect(() => {
    if (dropdownIsActive) {
      document.addEventListener("click", clickOutsideHandler);
    }
    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, [dropdownIsActive]);

  const dropdownOpenHandler = () => {
    setDropdownIsActive((prev) => (prev = !prev));
  };

  const itemClickHandler = (event: any) => {
    const index = parseFloat(event.target.value);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className="dropdownInput" ref={dropdownRef}>
      <div
        className={`dropdownInput__button ${dropdownIsActive && "--active"} ${
          activeItem && "--selecting"
        }`}
      >
        <button onClick={() => dropdownOpenHandler()}>
          <p>{activeItem ? data[activeItem - 1] : "Выберете отрасль"}</p>
          <div
            className={`dropdownInput__button-arrow ${
              dropdownIsActive ? "--active" : ""
            }`}
          >
            <ArrowIcon color={dropdownIsActive ? "active" : "default"} />
          </div>
        </button>
      </div>
      <ul className={`dropdownInput__list ${dropdownIsActive && "--active"}`}>
        {data.map((item, index) => (
          <button
            className={`dropdownInput__list-item ${
              index + 1 === activeItem && "--active"
            }`}
            value={index + 1}
            key={index}
            onClick={(event) => itemClickHandler(event)}
          >
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
};
