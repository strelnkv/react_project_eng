import "../../style/App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Table from "../Main/Table";
import Footer from "../Footer/Footer";
import data from "../../words.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Main arrWords={data.words}></Main>
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
          {data.words.map((word) => (
            <Table
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
            />
          ))}
        </table>
      </div>
      ;
      <Footer />
    </div>
  );
}

export default App;
