import React from "react";
import emptyPageIcon from "../../assets/images/emptyPageIcon.png";
import "./EmptyPage.scss";
import { Link } from "react-router-dom";

const EmptyPage: React.FC = () => {
  return (
    <div className="emptyPage">
      <div className="emptyPage__image-wrapper">
        <img
          className="emptyPage__image"
          src={emptyPageIcon}
          alt={emptyPageIcon}
        />
      </div>
      <h2 className="emptyPage__title">Упс, здесь еще ничего нет!</h2>
      <Link to={"/"} className="emptyPage__button button">Поиск Вакансий</Link>
    </div>
  );
};

export default EmptyPage;
