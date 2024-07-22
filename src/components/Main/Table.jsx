import React from "react";
import TableLine from "./TableLine";
import { useState } from "react";
import data from "../../../src/words.json";

export default function Table() {
  const [words, setWords] = useState(data.words);

  const handleWordChange = (editedWord) => {
    setWords(
      words.map((word) => {
        if (word.id === editedWord.id) {
          return editedWord;
        } else {
          return word;
        }
      })
    );
  };
  return (
    <div className="table container">
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
          {words.map((word) => (
            <TableLine
              key={word.id}
              word={word}
              onChange={handleWordChange}
              onDelete={(wordId) => {
                setWords(words.filter((word) => word.id !== wordId));
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
