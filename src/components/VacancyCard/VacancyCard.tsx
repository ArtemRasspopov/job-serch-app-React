import React, { useState } from "react";
import { LocationIcon } from "../../assets/icons/LocationIcon";
import "./VacancyCard.scss";

import { StarIcon } from "../../assets/icons/StarIcon";
import { IVacancy } from "../../models/models";
import { Link, useLocation } from "react-router-dom";

import {
  useAddFavoritesMutation,
  useRemoveFavoritesMutation,
} from "../../store/vacancies/vacancies.api";

interface VacancyCardProps {
  size?: "small" | "big";
  vacancy?: IVacancy;
  isLoading?: boolean
}

export const VacancyCard: React.FC<VacancyCardProps> = ({
  size = "small",
  vacancy,
}) => {
  const [fetchAddFavorites] = useAddFavoritesMutation();
  const [fetchRemoveFavorite] = useRemoveFavoritesMutation();
  const [isFavorite, setIsfavorite] = useState(vacancy?.favorite);
  const location = useLocation();

  const favoritesHandler = () => {
    if (vacancy) {
      if (isFavorite) {
        setIsfavorite((prev) => (prev = false));
        fetchRemoveFavorite(vacancy.id);
      } else {
        setIsfavorite((prev) => (prev = true));
        fetchAddFavorites(vacancy.id);
      }
    }
  };

  return (
    <div
      className={`vacancyCard ${size === "big" && "--big"} ${
        location.pathname === "/favourites" && !isFavorite && "--disabled"
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
                <li className="vacancyCard__descr-item">
                  з/п от {vacancy.payment_from + " " + vacancy.currency}
                </li>
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
            <button className="vacancyCard__star" onClick={favoritesHandler}>
              <StarIcon isActive={isFavorite} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
