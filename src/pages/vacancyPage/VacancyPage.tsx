import React, { useEffect } from "react";
import "./VacancyPage.scss";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyDescription } from "../../components/VacancyDescription/VacancyDescription";
import { useLazyGetVacancyQuery } from "../../store/vacancies/vacancies.api";
import { useLocation } from "react-router-dom";

const VacancyPage: React.FC = () => {
  const [fetchVacancy, { data: vacancyData }] = useLazyGetVacancyQuery();
  const location = useLocation();
  const vacancyId = parseInt(
    location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
  );

  console.log(vacancyId);

  useEffect(() => {
    fetchVacancy(vacancyId);
  }, [fetchVacancy, vacancyId]);

  return (
    <div className="vacancyPage">
      <PageContainer>
        <div className="vacancyPage__inner">
          <VacancyCard size="big" vacancy={vacancyData} />
          <VacancyDescription />
        </div>
      </PageContainer>
    </div>
  );
};

export default VacancyPage;
