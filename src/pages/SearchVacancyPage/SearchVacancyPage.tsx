import React, { useState } from "react";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { SearchFilters } from "../../components/SearchFilters/SearchFilters";
import { Search } from "../../components/Search/Search";
import "./SearchVacancyPage.scss";
import { useGetVacanciesQuery } from "../../store/vacancies/vacancies.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  setPage,
  setSearch,
} from "../../store/сatalogues/cataloguesFiltersSlice";
import { setFavorite } from "../../store/favorites/favoritesSlice";
import { VacancyCardSkeleton } from "../../components/VacancyCard/VacancyCardSkeleton/VacancyCardSkeleton";
import { Pagination } from "../../components/shared/Pagination/Pagination";
import { Container } from "../../components/containers/Container/Container";

const SearchVacancyPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favoritesData } = useAppSelector((state) => state.favoritesSlice);
  const [searchValue, setSearchValue] = useState("");
  const { catalogues, search, payment_from, payment_to, page } = useAppSelector(
    (state) => state.cataloguesFiltersSlice
  );
  const {
    data: vacancysData,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetVacanciesQuery(
    {
      keyword: search.split(" "),
      page,
      catalogues,
      payment_from,
      payment_to,
    },
    {
      refetchOnFocus: true,
    }
  );

  const searchHandler = (value: string) => {
    setSearchValue((prev) => (prev = value));
    if (value.length < 1) {
      dispatch(setSearch(""));
    }
  };

  const searchButtonClickHandler = (value: string) => {
    console.log(value);
    dispatch(setSearch(value));
  };

  const changeFavoriteHandler = (vacancyId: number) => {
    dispatch(setFavorite(vacancyId));
  };

  const changePageHandler = (selectedItem: { selected: number }) => {
    dispatch(setPage(selectedItem.selected));
  };

  const SearchFiltersResetHandler = () => {
    setSearchValue("");
  };

  return (
    <div className="searchVacancyPage page">
      <Container>
        <PageContainer>
          <div className="searchVacancyPage__inner">
            <div className="searchVacancyPage__filters-wrapper">
              <SearchFilters onReset={SearchFiltersResetHandler} />
            </div>
            <div className="searchVacancyPage__content-wrapper">
              <Search
                value={searchValue}
                placeholder="Введите название вакансии"
                type="text"
                onChange={(event) => searchHandler(event.target.value)}
                onButtonClick={searchButtonClickHandler}
              />
              <ul className="vacancies__list">
                {(isFetching || isLoading) &&
                  Array(4)
                    .fill("")
                    .map((_, id) => (
                      <VacancyCardSkeleton
                        key={id + Math.floor(Date.now() / 1000)}
                      />
                    ))}
                {isSuccess &&
                  !isFetching &&
                  vacancysData.objects.map((vacancy) => (
                    <li
                      className="vacancies__item"
                      key={vacancy.id + Math.floor(Date.now() / 1000)}
                    >
                      <VacancyCard
                        vacancy={vacancy}
                        isFavorite={favoritesData.includes(vacancy.id)}
                        changeFavoriteHandler={changeFavoriteHandler}
                      />
                    </li>
                  ))}
              </ul>
              <div className="pagination__wrapper">
                {vacancysData && vacancysData.total > 4 && (
                  <Pagination
                    pageCount={Math.ceil(vacancysData?.total / 4) - 1}
                    activePage={page}
                    changePageHandler={changePageHandler}
                  />
                )}
              </div>
            </div>
          </div>
        </PageContainer>
      </Container>
    </div>
  );
};

export default SearchVacancyPage;
