import React, { useState, useEffect } from "react";
import CharacterContainer from "./CharacterContainer";
import Search from "./Search";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // when using fetch make sure the local host is matching with your json server port
  useEffect(() => {
    fetch("https://hp-backend-json.onrender.com/characters")
      .then((res) => res.json())
      .then(setCharacters);
  }, []);

  const charactersToDisplay = characters.filter((character) =>
    character.character.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <div id="character-list">
      <h1 className="title">Welcome to the Hogwarts Universe!</h1>
      <Search searchTerms={searchTerm} setSearchTerm={setSearchTerm} />
      <CharacterContainer charactersToDisplay={charactersToDisplay} />
    </div>
  );
}
export default CharacterList;
