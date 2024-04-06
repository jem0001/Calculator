import React, { useState } from "react";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";
const buttons = [
  ["MC", "MR", "M+", "M-"],
  ["√", "AC", "C", "÷"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  ["%", 0, ".", "="],
];

const Buttons = ({
  inputHandler,
  clearInput,
  backspace,
  calculateAns,
  storedMemory,
  memoryPlus,
  memoryMinus,
  memoryClear,
  memoryRetrieve,
}) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  const handleClick = (e) => {
    console.log(e.target.innerText);
    const value = e.target.innerText;
    switch (value) {
      case "MC":
        memoryClear();
        break;
      case "MR":
        memoryRetrieve();
        break;
      case "M+":
        memoryPlus();
        break;
      case "M-":
        memoryMinus();
        break;
      case "AC":
        clearInput();
        break;
      case "C":
        backspace();
        break;
      case "=":
        calculateAns();
        break;
      default:
        inputHandler(value);
        break;
    }
  };

  return (
    <div className=" grid grid-cols-4 text-2xl gap-3 mt-8">
      {buttons.flat().map((bvalue, index) => {
        return (
          <button
            key={index}
            onClick={handleClick}
            className={` p-4 rounded-full shadow-md shadow-gray-500 hover:scale-105 text-gray-700 ${
              typeof bvalue === "number"
                ? "bg-gradient-to-b from-white to-secondary "
                : "bg-gradient-to-b from-tertiary to-blue-gray text-red-500"
            }`}
          >
            {bvalue}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
