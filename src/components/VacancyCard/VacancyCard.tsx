import React from "react";
import { LocationIcon } from "../../assets/icons/LocationIcon";

export const VacancyCard: React.FC = () => {
    return (
        <div className="vacancyCard">
            <div className="vacancyCard__content">
                <h3 className="vacancyCard__title">
                    Менеджер-дизайнер
                </h3>
                <ul className="vacancyCard__descr-list">
                    <li className="vacancyCard__descr-item">з/п от 70000 rub</li>
                    <li className="vacancyCard__descr-item">Полный рабочий день</li>
                </ul>
                <div className="vacancyCard__location">
                    <LocationIcon/>
                    <p className="vacancyCard__location-title">Новый Уренгой</p>
                </div>
            </div>
            <div className="vacancyCard__starWrapper">

            </div>
        </div>
    );
};

