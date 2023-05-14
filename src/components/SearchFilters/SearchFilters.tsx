import React, { useState } from "react";
import "./SearchFilters.scss";
import { DropdownInput } from "../shared/DropdownInput/DropdownInput";
import { NumberInput } from "../shared/NumberInput/NumberInput";
import { useGetCataloguesQuery } from "../../store/сatalogues/catalogues.api";
import { useAppDispatch } from "../../hooks/redux";
import { setCatalogues } from "../../store/сatalogues/cataloguesFiltersSlice";

export const SearchFilters: React.FC = () => {
  const { data: cataloguesData } = useGetCataloguesQuery({});
  const [activeCatalogues, SetActiveCatalogues] = useState<number>(0);
  const dispatch = useAppDispatch();

  const formSubmitHandler = () => {
    if (cataloguesData) {
      dispatch(setCatalogues(cataloguesData[activeCatalogues - 1].key));
    }
  };

  const resetHandler = () => {
    SetActiveCatalogues((prev) => (prev = 0));
    dispatch(setCatalogues(0));
  };

  const changeCataloguesHandler = (index: number) => {
    SetActiveCatalogues(index);
  };

  return (
    <div className="searchFilters">
      <div className="searchFilters__header">
        <h3 className="searchFilters__title">Фильтры</h3>
        <button
          className="searchFilters__resetButton"
          onClick={() => resetHandler()}
        >
          Сбросить все
        </button>
      </div>
      <ul className="searchFilters__list">
        <li className="searchFilters__item">
          <h4 className="searchFilters__item-title">Отрасль</h4>
          <DropdownInput
            data={cataloguesData?.map((item) => item.title)}
            activeItem={activeCatalogues}
            onChange={changeCataloguesHandler}
          />
        </li>
        <li className="searchFilters__item">
          <h4 className="searchFilters__item-title">Оклад</h4>
          <div className="searchFilters__inputs-wrapper">
            <NumberInput placeholder="От" step={100} min={0} max={1000} />
            <NumberInput placeholder="До" step={100} min={0} max={1000} />
          </div>
        </li>
      </ul>
      <button
        type="submit"
        className="searchFilters__submitButton button"
        onClick={() => formSubmitHandler()}
      >
        Применить
      </button>
    </div>
  );
};
