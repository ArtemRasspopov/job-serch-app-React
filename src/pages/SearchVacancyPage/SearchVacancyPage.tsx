import React, { useState } from "react";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { Search } from "../../components/Search/Search";
import "./SearchVacancyPage.scss";
import {
  useGetVacanciesQuery,
} from "../../store/vacancies/vacancies.api";

const SearchVacancyPage: React.FC = () => {
  const [value, setValue] = useState<string>("driver");

  const { data: vacancysData } = useGetVacanciesQuery(
    { keywords: value.split(" "), page : 1 },
    {
      refetchOnFocus: true,
    }
  );

  const searchHandler = (searchValue: string) => {
    console.log(searchValue);
    setValue(searchValue);
  };

  return (
    <div className="searchVacancyPage">
      <PageContainer>
        <div className="searchVacancyPage__inner">
          <div className="searchVacancyPage__filters-wrapper">
            <SearchFilters />
          </div>
          <div className="searchVacancyPage__content-wrapper">
            <Search searchHandler={searchHandler} value={value} button={true}/>
            <ul className="vacancies__list">
              {vacancysData?.map((vacancy, index) => (
                <li className="vacancies__item" key={index}>
                  <VacancyCard vacancy={vacancy} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default SearchVacancyPage;
