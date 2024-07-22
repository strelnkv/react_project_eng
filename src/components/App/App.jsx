import "../../style/App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "../Main/Table";
import data from "../../words.json";
import Missing from "../Missing";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Table></Table>} />
          <Route path="/cards" element={<Main arrWords={data.words}></Main>} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
