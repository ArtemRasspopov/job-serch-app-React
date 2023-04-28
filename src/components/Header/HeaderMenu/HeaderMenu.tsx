import React from "react";
import "./HeaderMenu.scss";

export const HeaderMenu: React.FC = () => {
  const menuItems = [
    { title: "Поиск Вакансий", link: "" },
    { title: "Избранное", link: "" },
  ];
  const activeItem = 0;

  return (
    <div className="headerMenu">
      <ul className="headerMenu__list">
        <li className="headerMenu__item">
          {menuItems.map((item, index) => (
            <a
              className={`headerMenu__link ${
                activeItem === index ? "--active" : ""
              }`}
              href={"/"}
              key={index}
            >
              {item.title}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};
