import React, { useState }from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar"
import CharacterContainer from "./CharacterContainer"

function App() {
  const [ page, setPage ] = useState("/");

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
        <Routes>
          <Route path="/characters" element={<Home />}/>
          <Route
          path="/newCharacter" element={<CharacterContainer />}/>
        </Routes>
    </div>
  );
}
export default App;
