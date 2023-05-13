import React, { useState } from "react";
import "./DropdownInput.scss";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";

interface IDataItem {
  title: string;
  key: number;
}

interface DropdownInputProps {
  data?: IDataItem[];
  onChange?: (key: number) => void;
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  data = [],
  onChange,
}) => {
  const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const dropdownInputClickHandler = () => {
    setDropdownIsActive((prev) => (prev = !prev));
  };

  const itemClickHandler = (event: any) => {
    const index = parseInt(event.target.value);
    if (onChange) {
      onChange(data[index].key);
    }
    setActiveItem((prev) => (prev = index));
  };

  return (
    <div className="dropdownInput">
      <div
        className={`dropdownInput__button ${activeItem !== null && "--active"}`}
      >
        <button onClick={() => dropdownInputClickHandler()}>
          {activeItem !== null ? data[activeItem].title : "Выберете отрасль"}
        </button>
        <div
          className={`dropdownInput__button-arrow ${
            dropdownIsActive ? "--active" : ""
          }`}
        >
          <ArrowIcon color={dropdownIsActive ? "active" : "default"} />
        </div>
      </div>
      <ul className={`dropdownInput__list ${dropdownIsActive && "--active"}`}>
        {data.map((item, index) => (
          <button
            className={`dropdownInput__list-item ${
              index === activeItem && "--active"
            }`}
            value={index}
            key={index}
            onClick={(event) => itemClickHandler(event)}
          >
            {item.title}
          </button>
        ))}
      </ul>
    </div>
  );
};
