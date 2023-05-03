import React from "react";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { Search } from "../../components/Search/Search";
import "./SearchVacancyPage.scss";

const SearchVacancyPage: React.FC = () => {
  return (
    <div className="vacancyPage">
      <PageContainer>
        <div className="vacancyPage__inner">
          <div className="vacancyPage__filters-wrapper">
            <SearchFilters />
          </div>
          <div className="vacancyPage__content-wrapper">
            <Search />
            <ul className="vacancy__list">
              <li className="vacancy__item">
                <VacancyCard />
              </li>
              <li className="vacancy__item">
                <VacancyCard />
              </li>
              <li className="vacancy__item">
                <VacancyCard />
              </li>
              <li className="vacancy__item">
                <VacancyCard />
              </li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default SearchVacancyPage;
