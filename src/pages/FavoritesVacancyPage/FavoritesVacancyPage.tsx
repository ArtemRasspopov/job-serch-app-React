import React, { useEffect } from "react";
import "./FavoritesVacancyPage.scss";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { useLazyGetFavoritesQuery } from "../../store/vacancies/vacancies.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFavorite } from "../../store/favorites/favoritesSlice";
import { Pagination } from "../../components/shared/Pagination/Pagination";
import { setFavoritesPage } from "../../store/сatalogues/cataloguesFiltersSlice";

const FavoritesVacancyPage: React.FC = () => {
  const { favoritesData } = useAppSelector((state) => state.favoritesSlice);
  const { favoritesPage } = useAppSelector(
    (state) => state.cataloguesFiltersSlice
  );
  const [
    getFavoritesHandler,
    { data: fetchFavoritesData, isLoading, isSuccess },
  ] = useLazyGetFavoritesQuery();
  const dispatch = useAppDispatch();

  const changeFavoriteHandler = (vacancyId: number) => {
    dispatch(setFavorite(vacancyId));
  };

  useEffect(() => {
    if (favoritesData) {
      getFavoritesHandler({ favoritesIds: favoritesData, page: favoritesPage });
    }
  }, [favoritesData, getFavoritesHandler, favoritesPage]);

  const changePageHandler = (selectedItem: { selected: number }) => {
    dispatch(setFavoritesPage(selectedItem.selected));
  };

  return (
    <div className="favoritesVacancyPage page">
      <PageContainer>
        <div className="favoritesVacancyPage__inner">
          <ul className="vacancies__list">
            {isLoading &&
              Array(4)
                .fill("")
                .map(() => <></>)}
            {isSuccess &&
              fetchFavoritesData?.objects.map((vacancy) => (
                <li className="vacancies__item" key={vacancy.id}>
                  <VacancyCard
                    vacancy={vacancy}
                    isFavorite={favoritesData.includes(vacancy.id)}
                    removable={true}
                    changeFavoriteHandler={changeFavoriteHandler}
                  />
                </li>
              ))}
          </ul>
          {fetchFavoritesData?.total && fetchFavoritesData?.total > 4 && (
            <div className="pagination__wrapper">
              <Pagination
                pageCount={fetchFavoritesData?.total / 4}
                activePage={favoritesPage}
                changePageHandler={changePageHandler}
              />
            </div>
          )}
        </div>
      </PageContainer>
    </div>
  );
};

export default FavoritesVacancyPage;
