import React, { useState } from "react";
import "./SearchFilters.scss";
import { DropdownInput } from "../shared/DropdownInput/DropdownInput";
import { NumberInput } from "../shared/NumberInput/NumberInput";
import { useGetCataloguesQuery } from "../../store/сatalogues/catalogues.api";
import { useAppDispatch } from "../../hooks/redux";
import {
  setCatalogues,
  setPage,
  setPaymentFrom,
  setPaymentTo,
} from "../../store/сatalogues/cataloguesFiltersSlice";

export const SearchFilters: React.FC = () => {
  const { data: cataloguesData } = useGetCataloguesQuery({});
  const [activeCatalogues, setActiveCatalogues] = useState<number>(0);
  const [paymentFromValue, setPaymentFromValue] = useState<number>(0);
  const [paymentToValue, setPaymentToValue] = useState<number>(0);
  const dispatch = useAppDispatch();

  const formSubmitHandler = () => {
    if (cataloguesData) {
      if (activeCatalogues) {
        dispatch(setCatalogues(cataloguesData[activeCatalogues - 1].key));
      }
    }
    dispatch(setPaymentFrom(paymentFromValue));
    dispatch(setPaymentTo(paymentToValue));
    dispatch(setPage(0));
  };

  const resetHandler = () => {
    setActiveCatalogues((prev) => (prev = 0));
    setPaymentFromValue((prev) => (prev = 0));
    setPaymentToValue((prev) => (prev = 0));
    dispatch(setCatalogues(0));
    dispatch(setPaymentFrom(0));
    dispatch(setPaymentTo(0));
    dispatch(setPage(0));
  };

  const changeCataloguesHandler = (index: number) => {
    setActiveCatalogues(index);
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
            <NumberInput
              placeholder="От"
              step={1000}
              min={0}
              value={paymentFromValue}
              onChange={setPaymentFromValue}
            />
            <NumberInput
              placeholder="До"
              step={1000}
              min={paymentFromValue + 1000}
              max={100000000}
              value={paymentToValue}
              onChange={setPaymentToValue}
            />
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
