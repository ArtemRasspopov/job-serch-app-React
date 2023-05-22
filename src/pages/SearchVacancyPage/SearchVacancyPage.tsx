import React from "react";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { Search } from "../../components/Search/Search";
import "./SearchVacancyPage.scss";
import { useGetVacanciesQuery } from "../../store/vacancies/vacancies.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSearch } from "../../store/сatalogues/cataloguesFiltersSlice";
import { setFavorite } from "../../store/favorites/favoritesSlice";

const SearchVacancyPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {favoritesData} = useAppSelector(state => state.favoritesSlice)
  const { catalogues, search, payment_from, payment_to } = useAppSelector(
    (state) => state.cataloguesFiltersSlice
  );

  const {
    data: vacancysData,
    isLoading,
    isSuccess,
  } = useGetVacanciesQuery(
    {
      keyword: search.split(" "),
      page: 1,
      catalogues,
      payment_from,
      payment_to,
    },
    {
      refetchOnFocus: true,
    }
  );

  const searchHandler = (value: string) => {
    dispatch(setSearch(value));
  };

  const changeFavoriteHandler = (vacancyId: number) => {
     dispatch(setFavorite(vacancyId))
  };

  return (
    <div className="searchVacancyPage page">
      <PageContainer>
        <div className="searchVacancyPage__inner">
          <div className="searchVacancyPage__filters-wrapper">
            <SearchFilters />
          </div>
          <div className="searchVacancyPage__content-wrapper">
            <Search
              searchHandler={searchHandler}
              value={search}
              button={true}
              placeholder="Введите название вакансии"
            />
            <ul className="vacancies__list">
              {isLoading &&
                Array(4)
                  .fill("")
                  .map(() => <></>)}
              {isSuccess &&
                vacancysData.map((vacancy) => (
                  <li className="vacancies__item" key={vacancy.id}>
                    <VacancyCard
                      vacancy={vacancy}
                      isFavorite={favoritesData.includes(vacancy.id)}
                      changeFavoriteHandler={changeFavoriteHandler}
                    />
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
