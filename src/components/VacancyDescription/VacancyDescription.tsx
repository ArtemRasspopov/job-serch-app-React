import React from "react";
import "./VacancyDescription.scss";
import { IVacancy } from "../../models/models";
import { SkeletonBlock } from "../shared/SkeletonBlock/SkeletonBlock";

interface VacancyDescriptionProps {
  vacancy?: IVacancy;
}

export const VacancyDescription: React.FC<VacancyDescriptionProps> = ({
  vacancy,
}) => {
  const vacancyDescriptionData = [
    {
      title: "Обязанности",
      points: [
        "Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии, сувенирной продукции.",
        "Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.",
        "Создание дизайна логотипов и брендбуков",
        "Управленческая функция: обучение, адаптация дизайнеров, их контроль, оценка",
      ],
    },
    {
      title: "Требования",
      points: [
        "Собеседование – после успешного прохождения тестового задания",
        "Рассматриваются кандидаты только с опытом работы.",
        "Обязательно - наличие портфолио",
        "Умение самостоятельно принимать решения, умение объективно оценивать свою работу, работать в режиме многозадачности и переключаться с одного задания к другому и планировать свой день. Соблюдать сроки.",
        "Ответственный, исполнительный, целеустремленный, большим плюсом будет опыт управления",
      ],
    },
    {
      title: "Условия",
      points: [
        "Оформление по контракту",
        "Полный социальный пакет",
        "Премирование по результатам работы",
      ],
    },
  ];

  return (
    <div className="vacancyDescription">
      {!vacancy && <SkeletonBlock />}
      {vacancy && (
        <>
          <p dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}></p>
        </>
      )}
    </div>
  );
};
