import React from "react";
import "./VacancyDescription.scss";
import { IVacancy } from "../../models/models";

interface VacancyDescriptionProps {
  vacancy?: IVacancy;
}

export const VacancyDescription: React.FC<VacancyDescriptionProps> = ({
  vacancy,
}) => {
  return (
    <div className="vacancyDescription">
      {!vacancy && <></>}
      {vacancy && (
        <>
          <p dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}></p>
        </>
      )}
    </div>
  );
};
