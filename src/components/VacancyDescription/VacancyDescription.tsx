import React from "react";
import "./VacancyDescription.scss";

export const VacancyDescription: React.FC = () => {
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
      {vacancyDescriptionData.map((item, index) => (
        <div className="vacancyDescription__paragraph" key={index}>
          <h4 className="vacancyDescription__title">{item.title}:</h4>
          <ol className="vacancyDescription__list">
            {item.points.map((item, index) => (
              <li className="vacancyDescription__list-item" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};
