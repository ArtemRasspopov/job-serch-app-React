import React from "react";
import "./VacancyPageСopy.scss";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyDescription } from "../../components/VacancyDescription/VacancyDescription";
import { useGetVacancyQuery } from "../../store/vacancies/vacancies.api";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../store/favorites/favoritesSlice";
import { VacancyCardSkeleton } from "../../components/VacancyCard/VacancyCardSkeleton/VacancyCardSkeleton";
import { VacancyDescriptionSkeleton } from "../../components/VacancyDescription/VacancyDescriptionSkeleton/VacancyDescriptionSkeleton";
import { Container } from "../../components/containers/Container/Container";

const VacancyPageСopy: React.FC = () => {
  const location = useLocation();
  const { favoritesData } = useAppSelector((state) => state.favoritesSlice);
  const dispatch = useDispatch();
  const vacancyId = parseInt(
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
  );
  const {
    data: vacancyData,
    isSuccess,
    isLoading,
  } = useGetVacancyQuery(vacancyId);

  const changeFavoriteHandler = (vacancyId: number) => {
    dispatch(setFavorite(vacancyId));
  };

  return (
    <div className="vacancyPage page">
      <Container>
        <PageContainer>
          <div className="vacancyPage__inner">
            {isLoading && (
              <>
                <VacancyCardSkeleton size="big" />
                <VacancyDescriptionSkeleton />
              </>
            )}
            {isSuccess && (
              <>
                <VacancyCard
                  size="big"
                  vacancy={vacancyData}
                  isFavorite={favoritesData.includes(vacancyId)}
                  changeFavoriteHandler={changeFavoriteHandler}
                />
                <VacancyDescription vacancy={vacancyData} />
              </>
            )}
          </div>
        </PageContainer>
      </Container>
    </div>
  );
};

export default VacancyPageСopy;
