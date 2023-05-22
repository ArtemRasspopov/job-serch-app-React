import React, { useEffect } from "react";
import "./FavoritesVacancyPage.scss";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { useLazyGetFavoritesQuery } from "../../store/vacancies/vacancies.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFavorite } from "../../store/favorites/favoritesSlice";

const FavoritesVacancyPage: React.FC = () => {
  const { favoritesData } = useAppSelector((state) => state.favoritesSlice);
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
      getFavoritesHandler(favoritesData);
    }
  }, [favoritesData, getFavoritesHandler]);

  return (
    <div className="favoritesVacancyPage page">
      <PageContainer>
        <div className="favoritesVacancyPage__inner">
          {favoritesData.length && (
            <ul className="vacancies__list">
              {isLoading &&
                Array(4)
                  .fill("")
                  .map(() => <></>)}
              {isSuccess &&
                fetchFavoritesData?.map((vacancy) => (
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
          )}
        </div>
      </PageContainer>
    </div>
  );
};

export default FavoritesVacancyPage;
