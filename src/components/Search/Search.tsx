import React, { useState, useEffect } from "react";
import "./Search.scss";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { useDebonce } from "../../hooks/debonce";

interface SearchProps {
  searchHandler: (string: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchHandler }) => {
  const [serchValue, setSerchValue] = useState("");

  const debounced = useDebonce(serchValue);

  useEffect(() => {
    searchHandler(debounced);
  }, [debounced, searchHandler]);

  return (
    <form className="search">
      <div className="search__iconWrapper">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type="text"
        placeholder="Введите название вакансии"
        value={serchValue}
        onChange={(event) => setSerchValue(event.target.value)}
      />
      <button className="search__submitButton button" type="submit">
        Поиск
      </button>
    </form>
  );
};
