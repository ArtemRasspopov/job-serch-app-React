import React, { useState, useEffect } from "react";
import "./Search.scss";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import { useDebonce } from "../../hooks/debonce";

interface SearchProps {
  searchHandler: (string: string) => void;
  value: string;
  button?: boolean;
  placeholder?: string
}

export const Search: React.FC<SearchProps> = ({
  searchHandler,
  value,
  button = false,
  placeholder
}) => {
  const [serchValue, setSerchValue] = useState(value);

  const debounced = useDebonce(serchValue);

  useEffect(() => {
    if (!debounced) {
      searchHandler("");
    } else if (!button) {
      searchHandler(debounced);
    }
  }, [debounced, searchHandler, button]);

  const buttonClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    searchHandler(debounced);
  };

  return (
    <form className="search">
      <div className="search__iconWrapper">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type="text"
        placeholder={placeholder}
        value={serchValue}
        onChange={(event) => setSerchValue(event.target.value)}
      />
      {button && (
        <button
          className="search__submitButton button"
          type="submit"
          onClick={(event) => buttonClickHandler(event)}
        >
          Поиск
        </button>
      )}
    </form>
  );
};
