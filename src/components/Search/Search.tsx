import React from "react";
import "./Search.scss";
import { SearchIcon } from "../../assets/icons/SearchIcon";

export const Search: React.FC = () => {
  return (
    <form className="search">
      <div className="search__iconWrapper">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type="text"
        placeholder="Введите название вакансии"
      />
      <button className="search__submitButton button" type="submit">
        Поиск
      </button>
    </form>
  );
};
