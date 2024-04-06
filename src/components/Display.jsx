import React from "react";

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^\xF7\u221A]+$/;

    if (e.target.value == "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <div className=" bg-gray-700  text-white h-[100px] px-4 grid rounded-">
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="w-full bg-transparent text-white placeholder-white text-4xl text-right "
              value={input}
              placeholder="0"
              // disabled
              onChange={onChangeTagInput}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className="w-full bg-transparent text-gray-300 placeholder-white text-xl text-right  "
              value={input}
              disabled
            />
            <input
              type="text"
              name="value"
              className="w-full bg-transparent text-white placeholder-white text-4xl text-right  "
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
