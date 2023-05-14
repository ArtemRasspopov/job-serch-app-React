import React, { useState } from "react";
import "./NumberInput.scss";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";

interface NumberInputProps {
  placeholder?: string | undefined;
  step?: number;
  min?: number | undefined;
  max?: number | undefined;

}

export const NumberInput: React.FC<NumberInputProps> = ({
  placeholder,
  step = 1,
  min,
  max,
}) => {
  const [value, setValue] = useState<string>("0");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => (prev = event.target.value));
  };

  const incrementHandler = () => {
    const incrementResult = Number(value) + step;
    if (max !== undefined) {
      if (incrementResult <= max) {
        setValue((prev) => (prev = incrementResult.toString()));
      }
    } else {
      setValue((prev) => (prev = incrementResult.toString()));
    }
  };

  const decrementHamdler = () => {
    const decrementResult = Number(value) - step;

    if (min !== undefined) {
      if (decrementResult >= min) {
        setValue((prev) => (prev = decrementResult.toString()));
      }
    } else {
      setValue((prev) => (prev = decrementResult.toString()));
    }
  };

  return (
    <div className="numberInput">
      <input
        className="numberInput__input"
        type="number"
        value={value !== "0" ? value : ""}
        placeholder={placeholder}
        // max={"600"}
        onChange={(event) => inputHandler(event)}
      />
      <div className="numberInput__buttons">
        <button
          className="numberInput__button"
          onClick={() => incrementHandler()}
        >
          <ArrowIcon color={"default"} size={"small"} />
        </button>
        <button
          className="numberInput__button"
          onClick={() => decrementHamdler()}
        >
          <ArrowIcon color={"default"} size={"small"} />
        </button>
      </div>
    </div>
  );
};
