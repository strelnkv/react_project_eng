import React from "react";
import TableLine from "./TableLine";
import { useState, useContext } from "react";
// import data from "../../../src/words.json";
import { WordsContext } from "../App/Words";

export default function Table() {
  const { words, updateWord, deleteWord, addWord } = useContext(WordsContext);

  const [isClosed, setClosed] = useState(true);

  const [ruValue, setRuValue] = useState("");
  const [trValue, setTrValue] = useState("");
  const [engValue, setEngValue] = useState("");

  function addNewWord() {
    const newWord = {
      english: engValue,
      russian: ruValue,
      transcription: trValue,
    };

    addWord(newWord);

    setRuValue("");
    setTrValue("");
    setEngValue("");

    setClosed(true);
  }

  return (
    <div className="table container">
      <div className="new_word">
        <button onClick={() => setClosed(!isClosed)}>Add new word</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className={isClosed ? "disabled" : ""}>
            <td>
              <input
                value={engValue}
                type="text"
                placeholder="add english word"
                onChange={(e) => setEngValue(e.target.value)}
              />
            </td>
            <td>
              <input
                value={trValue}
                type="text"
                placeholder="add transcription"
                onChange={(e) => setTrValue(e.target.value)}
              />
            </td>
            <td>
              <input
                value={ruValue}
                type="text"
                placeholder="add russian word"
                onChange={(e) => setRuValue(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addNewWord}>Save</button>
            </td>
          </tr>
          {words
            .slice()
            .reverse()
            .map((word) => (
              <TableLine
                key={word.id}
                word={word}
                onChange={updateWord}
                onDelete={deleteWord}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
