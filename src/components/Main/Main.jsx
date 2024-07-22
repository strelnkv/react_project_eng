import React from "react";
import { useState, useRef, useEffect } from "react";
import "../../style/Main.scss";

export default function Main(props) {
  const [buttonState, setButtonState] = useState("enabled");
  const [click, setClick] = useState(0);
  const [id, setId] = useState(0);

  const translateBtnRef = useRef();

  useEffect(() => {
    if (translateBtnRef.current) {
      translateBtnRef.current.focus();
    }
  }, [id]);

  function handlePrev() {
    if (id < props.arrWords.length - 1) {
      setId(id + 1);
      setButtonState("enabled");
    }
  }
  function handleNext() {
    if (id < props.arrWords.length - 1) {
      setId(id + 1);
      setButtonState("enabled");
    }
  }
  function translateBtn() {
    setButtonState("disabled");
    setClick(click + 1);
  }

  return (
    <div className="container main">
      <div className="cardDiv">
        <button onClick={handlePrev} className="cardsButton">
          Don't know
        </button>
        <div className="wr-cards">
          <p className="cardName">CARDS</p>
          <div className="cardItem">
            <p>{props.arrWords[id].english}</p>
          </div>
        </div>
        <button onClick={handleNext} className="cardsButton">
          Know
        </button>
      </div>
      <div className="buttonDiv">
        <button
          className={`translation ${buttonState}`}
          onClick={() => translateBtn()}
          ref={translateBtnRef}
        >
          Translation
        </button>
        <button
          className={
            buttonState === "enabled"
              ? "translation disabled"
              : "show_translation"
          }
        >
          {props.arrWords[id].russian}
        </button>
      </div>
      <p className="words">Words learned: {click}</p>
    </div>
  );
}
