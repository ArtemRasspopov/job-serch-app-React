import React, { useEffect } from "react";
import "./VacancyPage.scss";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyDescription } from "../../components/VacancyDescription/VacancyDescription";
import { useLazyGetVacancyQuery } from "../../store/vacancies/vacancies.api";
import { useLocation } from "react-router-dom";
import { SkeletonBlock } from "../../components/shared/SkeletonBlock/SkeletonBlock";

const VacancyPage: React.FC = () => {
  const [fetchVacancy, { data: vacancyData, isSuccess, isLoading }] =
    useLazyGetVacancyQuery();
  const location = useLocation();
  const vacancyId = parseInt(
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
  );

  useEffect(() => {
    fetchVacancy(vacancyId);
  }, [fetchVacancy, vacancyId]);

  return (
    <div className="vacancyPage page">
      <PageContainer>
        <div className="vacancyPage__inner">
          {isLoading && (
            <>
              <VacancyCard size="big" />
              <VacancyDescription />
            </>
          )}
          {isSuccess && (
            <>
              <VacancyCard size="big" vacancy={vacancyData} />
              <VacancyDescription vacancy={vacancyData}/>
            </>
          )}
        </div>
      </PageContainer>
    </div>
  );
};

export default VacancyPage;
