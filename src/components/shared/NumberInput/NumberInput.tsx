import React, { useState } from "react";
import "./NumberInput.scss";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";

export const NumberInput: React.FC = () => {
  const [value, setValue] = useState<string>("0");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => (prev = event.target.value));
  };

  return (
    <div className="numberInput">
      <input
        className="numberInput__input"
        type="number"
        value={value !== "0" ? value : ""}
        placeholder="От"
        // max={"600"}
        onChange={(event) => inputHandler(event)}
      />
      <div className="numberInput__buttons">
        <button className="numberInput__button">
          <ArrowIcon color={"default"} size={"small"} />
        </button>
        <button className="numberInput__button">
          <ArrowIcon color={"default"} size={"small"} />
        </button>
      </div>
    </div>
  );
};
