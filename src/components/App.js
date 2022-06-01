import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import CharacterList from "./CharacterList";
import NewCharacterForm from "./NewCharacterForm";

function App() {
  const [page, setPage] = useState("/");

  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      <Routes>
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/newCharacter" element={<NewCharacterForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
