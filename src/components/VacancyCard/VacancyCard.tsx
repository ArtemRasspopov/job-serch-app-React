import React, { useState } from "react";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import "./VacancyCard.scss";
import { StarIcon } from "../../assets/icons/StarIcon";
import { IVacancy } from "../../models/models";
import { Link } from "react-router-dom";

interface VacancyCardProps {
  size?: "small" | "big";
  vacancy?: IVacancy;
  isLoading?: boolean;
  isFavorite: boolean;
  removable?: boolean;
  changeFavoriteHandler: (vacancyId: number) => void;
}

export const VacancyCard: React.FC<VacancyCardProps> = ({
  size = "small",
  vacancy,
  removable = false,
  changeFavoriteHandler,
  isFavorite,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const starHandler = (vacancyId: number) => {
    if (removable) {
      setIsDisabled(true);
      changeFavoriteHandler(vacancyId);
    } else {
      changeFavoriteHandler(vacancyId);
    }
  };

  const determinePayment = () => {
    if (vacancy?.agreement) {
      return "по договоренности";
    } else if (vacancy?.payment_to && vacancy.payment_from) {
      return `от ${vacancy?.payment_from} до ${vacancy?.payment_to}`;
    } else if (vacancy?.payment_from) {
      return `от ${vacancy?.payment_from}`;
    } else if (vacancy?.payment_to) {
      return `до ${vacancy?.payment_to}`;
    } else {
      return `не указана`;
    }
  };

  return (
    <div
      className={`vacancyCard ${size === "big" && "--big"} ${
        isDisabled && "--disabled"
      }`}
    >
      {vacancy && (
        <>
          <div className="vacancyCard__inner">
            <div className="vacancyCard__content">
              {size === "small" ? (
                <Link to={`/vacancy/${vacancy.id}`}>
                  <h3 className="vacancyCard__title">{vacancy.profession}</h3>
                </Link>
              ) : (
                <h3 className="vacancyCard__title">{vacancy.profession}</h3>
              )}

              <ul className="vacancyCard__descr-list">
                <li className="vacancyCard__descr-item">з/п {determinePayment()}</li>
                <li className="vacancyCard__descr-item">
                  {vacancy.type_of_work.title}
                </li>
              </ul>
              <div className="vacancyCard__location">
                <div className="vacancyCard__location-iconWrapper">
                  <LocationIcon />
                </div>
                <p className="vacancyCard__location-title">
                  {vacancy.town.title}
                </p>
              </div>
            </div>
            <button
              className="vacancyCard__star"
              onClick={() => starHandler(vacancy.id)}
            >
              <StarIcon isActive={isFavorite} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
