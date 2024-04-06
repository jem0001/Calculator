import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { evaluate, round } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [storedNumber, setStoredNumber] = useState(null);

  //input
  const inputHandler = (value) => {
    if (answer === "Invalid Input!!") return;
    let val = value;
    let str = input + val;
    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
    // setInput(str);
  };

  //Clear screen
  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  // calculate final answer
  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    //  finalexpression = input.replaceAll("^", "**");  //for eval()
    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    // evaluate square root
    let noSqrt = input.match(/√[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalexpression = evalSqrt;
    }

    try {
      result = evaluate(finalexpression); //mathjs
      if (!isFinite(result)) {
        throw new Error("Can't divide by zero");
      }
    } catch (error) {
      result = "Invalid Input!!";
      if (error.message == "Can't divide by zero") {
        result = "Can't divide by zero";
      }
    }

    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 8));
  };

  // remove last character
  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  // MEMORY FUNCTIONs
  const memoryPlus = () => {
    if (storedNumber === null) {
      setStoredNumber(answer == "" ? Number(input) : Number(answer));
    } else {
      setStoredNumber(
        answer == ""
          ? storedNumber + Number(input)
          : storedNumber + Number(answer)
      );
    }
  };
  const memoryMinus = () => {
    if (storedNumber === null) {
      setStoredNumber(answer == "" ? -Number(input) : -Number(answer));
    } else {
      setStoredNumber(
        answer == ""
          ? storedNumber - Number(input)
          : storedNumber - Number(answer)
      );
    }
  };
  const memoryClear = () => {
    setStoredNumber(null);
  };
  const memoryRetrieve = () => {
    setAnswer(storedNumber);
  };

  return (
    <>
      <div className="bg-indigo-100 h-screen grid place-items-center px-4">
        <div className="border-black border-2 rounded-[15px] container mx-auto max-w-md bg-primary p-6 py-10 shadow-red-800">
          <Display input={input} setInput={setInput} answer={answer} />
          <Buttons
            storedNumber={storedNumber}
            memoryPlus={memoryPlus}
            memoryMinus={memoryMinus}
            memoryClear={memoryClear}
            memoryRetrieve={memoryRetrieve}
            inputHandler={inputHandler}
            clearInput={clearInput}
            backspace={backspace}
            calculateAns={calculateAns}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;
