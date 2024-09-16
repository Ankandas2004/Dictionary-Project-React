import axios from "axios";
import { useState } from 'react';
import ListDetails from "./components/ListDetails";
import './styles.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [keyWord, setKeyWord] = useState("");

  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
      alert("Can not find the word");
    }
  }

  function handleClear() {
    setKeyWord("");
    setResult(null);
  }
  return (
    <div className="App">
      <div className="head">-:English Dictionary:-</div>
      <br></br>
      <div className="mb-3">
      <input value={keyWord} onChange={(e) => setKeyWord(e.target.value)} class="form-control" placeholder="Let's find your word"/>
      </div>
      <button className="button" type="submit" onClick={handleSearch}>
        Search
      </button>
      <button
        disabled={!result}
        className="button"
        type="submit"
        onClick={handleClear}
      >
        Clear
      </button>
      <br></br>
      <br></br>
      {result && <ListDetails {...{ result }} />}
    </div>
  );
}