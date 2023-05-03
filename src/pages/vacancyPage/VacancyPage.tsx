import React from "react";
import "./VacancyPage.scss";
import { VacancyCard } from "../../components/VacancyCard/VacancyCard";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";
import { VacancyDescription } from "../../components/VacancyDescription/VacancyDescription";

const VacancyPage: React.FC = () => {
  return (
    <div className="vacancyPage">
      <PageContainer>
        <div className="vacancyPage__inner">
          <VacancyCard size="big" />
          <VacancyDescription />
        </div>
      </PageContainer>
    </div>
  );
};

export default VacancyPage;
