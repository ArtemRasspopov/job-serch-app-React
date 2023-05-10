import React from "react";
import "./FavoriteVacancyPage.scss";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";

const FavoriteVacancyPage: React.FC = () => {
  return (
    <div>
      <PageContainer>
        <div className="searchVacancyPage__inner">
          <ul className="vacancies__list">
            {/* {VacancysData?.map((vacancy, index) => (
              <li className="vacancies__item" key={index}>
                <VacancyCard vacancy={vacancy} />
              </li>
            ))} */}
          </ul>
        </div>
      </PageContainer>
    </div>
  );
};

export default FavoriteVacancyPage;
