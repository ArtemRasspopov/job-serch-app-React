import React, { useState } from "react";
import "./DropdownInput.scss";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";

export const DropdownInput: React.FC = () => {
  const items = [
    "IT, интернет, связь, телеком",
    "Кадры, управление персоналом",
    " Искусство, культура, развлечения",
    "Банки, инвестиции, лизинг",
    "Дизайн",
    "тест",
  ];

  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const dropdownInputClickHandler = () => {
    setDropdownIsActive((prev) => (prev = !prev));
  };

  return (
    <div className="dropdownInput">
      <div className="dropdownInput__button">
        <button onClick={() => dropdownInputClickHandler()}>
          Выберете отрасль
        </button>
        <div
          className={`dropdownInput__button-arrow ${
            dropdownIsActive ? "--active" : ""
          }`}
        >
          <ArrowIcon color={dropdownIsActive ? "active" : "default"} />
        </div>
      </div>
      <ul
        className={`dropdownInput__list ${dropdownIsActive ? "--active" : ""}`}
      >
        {items.map((item, index) => (
          <li className="dropdownInput__list-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
