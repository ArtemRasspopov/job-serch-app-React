import React, { useState, useEffect } from "react";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { Search } from "../../components/Search/Search";
import "./SearchVacancyPage.scss";
import { useGetVacanciesQuery, useLazyGetVacanciesQuery } from "../../store/vacancies/vacancies.api";

const SearchVacancyPage: React.FC = () => {



  // const { data: vacancysData } = useGetVacanciesQuery({}, {refetchOnFocus: true,});
  const [getData, {data : vacancysData}] = useLazyGetVacanciesQuery()

  useEffect(() => {
    getData({})
  }, [getData])

  console.log(vacancysData);

  const searchHandler = async (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <div className="searchVacancyPage">
      <PageContainer>
        <div className="searchVacancyPage__inner">
          <div className="searchVacancyPage__filters-wrapper">
            <SearchFilters />
          </div>
          <div className="searchVacancyPage__content-wrapper">
            <Search searchHandler={(string) => searchHandler(string)} />
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
