import React from "react";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import "./VacancyCard.scss";
import { StarIcon } from "../../assets/icons/StarIcon";
import { IVacancy } from "../../models/models";
import { Link } from "react-router-dom";

interface VacancyCardProps {
  size?: "small" | "big";
  vacancy?: IVacancy;
}

export const VacancyCard: React.FC<VacancyCardProps> = ({
  size = "small",
  vacancy,
}) => {
  return (
    <div className={`vacancyCard ${size === "small" ? "" : "--big"}`}>
      <div className="vacancyCard__content">
        {size === "small" ? (
          <Link to={`/vacancy/${vacancy?.id}`}>
            <h3 className="vacancyCard__title">{vacancy?.profession}</h3>
          </Link>
        ) : (
          <h3 className="vacancyCard__title">{vacancy?.profession}</h3>
        )}

        <ul className="vacancyCard__descr-list">
          <li className="vacancyCard__descr-item">
            з/п от {vacancy?.payment_from + " " + vacancy?.currency} 
          </li>
          <li className="vacancyCard__descr-item">
            {vacancy?.type_of_work.title}
          </li>
        </ul>
        <div className="vacancyCard__location">
          <div className="vacancyCard__location-iconWrapper">
            <LocationIcon />
          </div>
          <p className="vacancyCard__location-title">{vacancy?.town.title}</p>
        </div>
      </div>
      <button className="vacancyCard__star">
        <StarIcon isActive={vacancy?.favorite} />
      </button>
    </div>
  );
};
