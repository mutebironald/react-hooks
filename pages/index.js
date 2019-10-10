import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <>
      <input
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some text"
      />
      <br />
      {inputText}
      <br />
      <hr />
      <ul>
        {historyList.map(rec => {
          return <div>{rec}</div>;
        })}
      </ul>
    </>
  );
};

export default InputElement;
