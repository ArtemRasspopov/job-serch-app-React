import React from "react";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import "./VacancyCard.scss";
import { StarIcon } from "../../assets/icons/StarIcon";

interface VacancyCardProps {
  size?: "small" | "big";
}

export const VacancyCard: React.FC<VacancyCardProps> = ({ size = "small" }) => {
  return (
    <div className={`vacancyCard ${size === "small" ? "" : "--big"}`}>
      <div className="vacancyCard__content">
        <h3 className="vacancyCard__title">Менеджер-дизайнер</h3>
        <ul className="vacancyCard__descr-list">
          <li className="vacancyCard__descr-item">з/п от 70000 rub</li>
          <li className="vacancyCard__descr-item">Полный рабочий день</li>
        </ul>
        <div className="vacancyCard__location">
          <div className="vacancyCard__location-iconWrapper">
            <LocationIcon />
          </div>
          <p className="vacancyCard__location-title">Новый Уренгой</p>
        </div>
      </div>
      <button className="vacancyCard__star">
        <StarIcon isActive={true} />
      </button>
    </div>
  );
};
