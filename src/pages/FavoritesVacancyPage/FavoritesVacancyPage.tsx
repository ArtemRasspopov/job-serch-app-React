import React, { useEffect } from "react";
import "./FavoritesVacancyPage.scss";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { useLazyGetFavoritesQuery } from "../../store/vacancies/vacancies.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFavorite } from "../../store/favorites/favoritesSlice";
import { Pagination } from "../../components/shared/Pagination/Pagination";
import { setFavoritesPage } from "../../store/сatalogues/cataloguesFiltersSlice";
import { VacancyCardSkeleton } from "../../components/VacancyCard/VacancyCardSkeleton/VacancyCardSkeleton";
import { Container } from "../../components/containers/Container/Container";
import { Navigate } from "react-router-dom";

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
    if (favoritesData.length) {
      getFavoritesHandler({ favoritesIds: favoritesData, page: favoritesPage });
    }
    if (favoritesData.length < 5) {
      dispatch(setFavoritesPage(0));
    }
  }, [favoritesData, getFavoritesHandler, favoritesPage, dispatch]);

  const changePageHandler = (selectedItem: { selected: number }) => {
    dispatch(setFavoritesPage(selectedItem.selected));
  };

  return (
    <div className="favoritesVacancyPage page">
      <Container>
        <PageContainer>
          <div className="favoritesVacancyPage__inner">
            {favoritesData.length ? (
              <>
                <ul className="vacancies__list">
                  {isLoading &&
                    Array(4)
                      .fill("")
                      .map((_, id) => (
                        <VacancyCardSkeleton
                          key={id + Math.floor(Date.now() / 1000)}
                        />
                      ))}
                  {isSuccess &&
                    fetchFavoritesData?.objects.map((vacancy) => (
                      <li
                        className="vacancies__item"
                        key={vacancy.id + Math.floor(Date.now() / 1000)}
                      >
                        <VacancyCard
                          vacancy={vacancy}
                          isFavorite={favoritesData.includes(vacancy.id)}
                          removable={true}
                          changeFavoriteHandler={changeFavoriteHandler}
                        />
                      </li>
                    ))}
                </ul>
              </>
            ) : <Navigate to={`/empty/favorites`}/>}

            {favoritesData.length > 4 && (
              <div className="pagination__wrapper">
                <Pagination
                  pageCount={Math.ceil(favoritesData.length / 4)}
                  activePage={favoritesPage}
                  changePageHandler={changePageHandler}
                />
              </div>
            )}
          </div>
        </PageContainer>
      </Container>
    </div>
  );
};

export default FavoritesVacancyPage;
