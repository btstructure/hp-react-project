import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterContainer({ charactersToDisplay }) {
  const charCard = charactersToDisplay.map((character) => {
    return <CharacterCard key={character.id} chars={character} />;
  });

  return <div className="card">{charCard}</div>;
}

export default CharacterContainer;
