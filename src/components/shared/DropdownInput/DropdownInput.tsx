import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!activeItem) {
      setDropdownIsActive(false);
    }
  }, [activeItem]);

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
    <div className="dropdownInput" >
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
