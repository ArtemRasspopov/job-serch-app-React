import React from "react";
import { PageContainer } from "../../components/containers/PageContainer/PageContainer";

const VacancyPage: React.FC = () => {
  return (
    <div className="vacancyPage">
      <PageContainer>
        <div className="vacancyPage__inner">
          <div className="vacancyPage__filters-wrapper"></div>
          <div className="vacancyPage__content-wrapper"></div>
        </div>
      </PageContainer>
    </div>
  );
};

export default VacancyPage;
