import React from "react";
import "./NumberInput.scss";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";

interface NumberInputProps {
  placeholder?: string | undefined;
  step?: number;
  min?: number | undefined;
  max?: number | undefined;
  value: number;
  onChange: (set: React.SetStateAction<number>) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  placeholder,
  step = 1,
  value = 0,
  min = undefined,
  max = undefined,
  onChange,
}) => {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "") {
      onChange(0);
    } else {
      onChange(parseFloat(value));
    }
  };

  const incrementHandler = () => {
    if (max !== undefined) {
      if (min !== undefined) {
        if (value < min) {
          onChange(min);
        } else {
          if (value + step <= max) {
            onChange(value + step);
          }
        }
      }
    } else {
      onChange(value + step);
    }
  };

  const decrementHamdler = () => {
    if (max !== undefined) {
      if (value > max) {
        onChange(max);
      } else if (min !== undefined) {
        if (value - step >= min) {
          onChange(value - step);
        }
      } else {
        onChange(value - step);
      }
    } else {
      if (min !== undefined) {
        if (value - step >= min) {
          onChange(value - step);
        }
      } else {
        onChange(value - step);
      }
    }
  };

  return (
    <div className="numberInput">
      <input
        className="numberInput__input"
        type="number"
        value={value !== 0 ? value : ""}
        placeholder={placeholder}
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
