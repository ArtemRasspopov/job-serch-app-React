import React from "react";
import emptyPageIcon from "../../assets/images/emptyPageIcon.png";
import "./EmptyPage.scss";

const EmptyPage: React.FC = () => {
  return (
    <div className="emptyPage">
      <div>
        <img
          className="emptyPage__image"
          src={emptyPageIcon}
          alt={emptyPageIcon}
        />
      </div>
      <h2 className="emptyPage__title">Упс, здесь еще ничего нет!</h2>
      <button className="emptyPage__button button">Поиск Вакансий</button>
    </div>
  );
};

export default EmptyPage;
