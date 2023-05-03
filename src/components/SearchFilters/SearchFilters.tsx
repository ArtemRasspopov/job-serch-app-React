import React from "react";
import "./SearchFilters.scss";
import { DropdownInput } from "../shared/DropdownInput/DropdownInput";
import { NumberInput } from "../shared/NumberInput/NumberInput";

export const SearchFilters: React.FC = () => {
  return (
    <div className="searchFilters">
      <div className="searchFilters__header">
        <h3 className="searchFilters__title">Фильтры</h3>
        <button className="searchFilters__resetButton">Сбросить все</button>
      </div>
      <ul className="searchFilters__list">
        <li className="searchFilters__item">
          <h4 className="searchFilters__item-title">Отрасль</h4>
          <DropdownInput />
        </li>
        <li className="searchFilters__item">
          <h4 className="searchFilters__item-title">Оклад</h4>
          <div className="searchFilters__inputs-wrapper">
            <NumberInput placeholder="От" step={100} min={0} max={1000}/>
            <NumberInput placeholder="До" step={100} min={0} max={1000}/>
          </div>
        </li>
      </ul>
      <button type="submit" className="searchFilters__submitButton button">Применить</button>
    </div>
  );
};
