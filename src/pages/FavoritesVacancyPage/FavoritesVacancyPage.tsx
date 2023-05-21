import React from "react";
import "./FavoritesVacancyPage.scss";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { useGetFavoritesQuery } from "../../store/vacancies/vacancies.api";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { SkeletonBlock } from "../../components/shared/SkeletonBlock/SkeletonBlock";

const FavoritesVacancyPage: React.FC = () => {
  const { data: favoritesData, isLoading, isSuccess } = useGetFavoritesQuery();

  return (
    <div className="favoritesVacancyPage page">
      <PageContainer>
        <div className="favoritesVacancyPage__inner">
          <ul className="vacancies__list">
            {isLoading &&
              Array(4)
                .fill("")
                .map(() => <SkeletonBlock/>)}

            {isSuccess &&
              favoritesData.map((vacancy) => (
                <li className="vacancies__item" key={vacancy.id}>
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
