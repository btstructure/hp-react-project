import React, { useState, useEffect } from "react";
import CharacterContainer from "./CharacterContainer";
import NewCharacterForm from "./NewCharacterForm";
import Search from "./Search";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // when using fetch make sure the local host is matching with your json server port
  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then(setCharacters);
  }, []);

  const charactersToDisplay = characters.filter((character) => character.character.toUpperCase().includes(searchTerm.toUpperCase()))

  const handleAddNewCharacter = (newCharacter) => {
    setCharacters({...characters, newCharacter})
  }
  

  return (
    <div>
      <h1>Welcome to all Harry Potter Fans</h1>
      <p>About HP world, fun fact</p>
      <Search searchTerms={searchTerm} setSearchTerm={setSearchTerm} />
      <CharacterContainer charactersToDisplay={charactersToDisplay} />
      <NewCharacterForm handleAddNewCharacter = {handleAddNewCharacter}/>
    </div>
  );
}
export default Home;
