import React, { useState, useEffect } from "react";
import "./HeaderMenu.scss";
import { Link, useLocation } from "react-router-dom";

export const HeaderMenu: React.FC = () => {
  const menuItems = [
    { title: "Поиск Вакансий", link: "/" },
    { title: "Избранное", link: "/favourites" },
  ];
  const location = useLocation();
  // const [activeMenu, setActiveMenu] = useState(0);



  return (
    <div className="headerMenu">
      <ul className="headerMenu__list">
        <li className="headerMenu__item">
          {menuItems.map((item, index) => (
            <Link

              className={`headerMenu__link ${
                item.link === location.pathname ? "--active" : ""
              }`}
              to={item.link}
              key={index + Math.floor(Date.now() / 1000)}
              // onClick={() => console.log(setActiveMenu(index))}
            >
              {item.title}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};
