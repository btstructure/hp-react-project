import React from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import CharacterList from "./CharacterList";
import NewCharacterForm from "./NewCharacterForm";
import CharacterDetail from "./CharacterDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/*" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/newCharacter" element={<NewCharacterForm />} />
      </Routes>
    </div>
  );
}
export default App;
