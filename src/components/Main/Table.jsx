import React from "react";
import "../../style/Table.scss";

export default function Table(props) {
  return (
    <tbody>
      <tr>
        <td>{props.english}</td>
        <td>{props.transcription}</td>
        <td>{props.russian}</td>
        <td className="tableBtn">
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  );
}
