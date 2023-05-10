import React from "react";
import "./HeaderMenu.scss";
import { Link, useLocation } from "react-router-dom";

export const HeaderMenu: React.FC = () => {
  const menuItems = [
    { title: "Поиск Вакансий", link: "/" },
    { title: "Избранное", link: "/favourites" },
  ];
  
  const location = useLocation();

  return (
    <div className="headerMenu">
      <ul className="headerMenu__list">
        <li className="headerMenu__item">
          {menuItems.map((item, index) => (
            <Link
              className={`headerMenu__link ${
                location.pathname === item.link ? "--active" : ""
              }`}
              to={item.link}
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};
