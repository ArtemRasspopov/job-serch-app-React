import React, { useEffect } from "react";
import "./FavoritesVacancyPage.scss";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { useLazyGetFavoritesQuery } from "../../store/favorites/favorites.api";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";

const FavoritesVacancyPage: React.FC = () => {
  const [getFavorites, {data : favoritesData}] = useLazyGetFavoritesQuery()

  useEffect(() => {
    getFavorites()
  }, [getFavorites])

  return (
    <div className="favoritesVacancyPage page">
      <PageContainer>
        <div className="favoritesVacancyPage__inner">
          <ul className="vacancies__list">
            {favoritesData?.map((vacancy, index) => (
              <li className="vacancies__item" key={index}>
                <VacancyCard vacancy={vacancy} />
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </div>
  );
};

export default FavoritesVacancyPage;
