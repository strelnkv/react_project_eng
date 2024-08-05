import "../../style/App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "../Main/Table";
import data from "../../words.json";
import Missing from "../Missing";
// import WordsContextProvider from "./Words";
import { WordsContext } from "./Words";
import { useState, useEffect } from "react";

function App() {
  const [words, setWords] = useState([]);

  const url = "http://itgirlschool.justmakeit.ru/api/words";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWords(data));
  }, []);

  async function updateWord(word) {
    try {
      const response = await fetch(`${url}/${word.id}/update`, {
        method: "POST",
        body: JSON.stringify(word),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteWord(wordId) {
    try {
      const response = await fetch(`${url}/${wordId}/delete`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setWords(words.filter((word) => word.id !== wordId));
    } catch (error) {
      console.error(error.message);
    }
  }

  async function addWord(word) {
    try {
      const response = await fetch(`${url}/add`, {
        body: JSON.stringify(word),
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      setWords([...words, json]);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <WordsContext.Provider value={{ words, updateWord, deleteWord, addWord }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Table></Table>} />
            <Route path="/cards" element={<Main></Main>} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </div>
      </Router>
    </WordsContext.Provider>
  );
}

export default App;
