import React from "react";
import "../../style/Table.scss";
import { useState, useRef } from "react";

export default function TableLine(props) {
  const [engWord, setEngWord] = useState(props.word.english);
  const [ruWord, setRuWord] = useState(props.word.russian);
  const [inputState, setInputState] = useState(true);
  const [inputValue, setInputValue] = useState(engWord);
  const [inputRu, setInputRu] = useState(ruWord);

  const refRu = useRef();
  const refEng = useRef();

  function edit() {
    if (!inputState) {
      if (inputValue.trim() === "") {
        alert("English word cannot be empty");

        refRu.current.focus();
        return;
      }
      if (inputRu.trim() === "") {
        alert("Russian word cannot be empty");

        refEng.current.focus();
        return;
      }
    }

    setEngWord(inputValue);
    setRuWord(inputRu);

    props.onChange({
      ...props.word,
      english: inputValue,
      russian: inputRu,
    });

    console.log(
      `english: ${inputValue}
      russian:  ${inputRu}`
    );
    setInputState(!inputState);
  }

  return (
    <tr>
      <td>
        <input
          ref={refRu}
          required
          onChange={(e) => setInputValue(e.target.value)}
          className={inputState ? "disabled" : ""}
          value={inputValue}
          type="text"
          placeholder={engWord}
        />

        <span className={inputState ? "" : "disabled"} id={props.id}>
          {engWord}
        </span>
      </td>
      <td>
        <span>{props.word.transcription}</span>
      </td>
      <td>
        <input
          ref={refEng}
          required
          onChange={(e) => setInputRu(e.target.value)}
          className={inputState ? "disabled" : ""}
          value={inputRu}
          type="text"
          placeholder={ruWord}
        />

        <span className={inputState ? "" : "disabled"} id={props.id}>
          {ruWord}
        </span>
      </td>
      <td className="tableBtn">
        <button onClick={edit}>{inputState ? "Edit" : "Save"} </button>
        <button onClick={() => props.onDelete(props.word.id)}>Delete</button>
      </td>
    </tr>
  );
}
