import React from "react";
import "./Search.scss";
import { SearchIcon } from "../../assets/icons/SearchIcon";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onButtonClick: (
    value: string
  ) => void;
  value: string
}

export const Search: React.FC<SearchProps> = ({
  value,
  type,
  placeholder,
  onChange,
  onButtonClick,
}) => {
  const buttonClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onButtonClick(value);
  };

  return (
    <form className="search">
      <div className="search__iconWrapper">
        <SearchIcon />
      </div>
      <input
        className="search__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <button
        className="search__submitButton button"
        type="submit"
        onClick={buttonClickHandler}
      >
        Поиск
      </button>
    </form>
  );
};
