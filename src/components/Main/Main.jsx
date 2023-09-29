import React from "react";
import "../../style/Main.scss";

export default function Main(props) {
  console.log(props);
  return (
    <div className="container main">
      <div className="cardDiv">
        <button className="cardsButton">Don't know</button>
        <div className="wr-cards">
          <p className="cardName">CARDS</p>
          <div className="cardItem">
            <p>{props.arrWords[0].english}</p>
          </div>
        </div>
        <button className="cardsButton">Know</button>
      </div>
      <div className="buttonDiv">
        <button className="translation">Translation</button>
      </div>
    </div>
  );
}
