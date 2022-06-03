import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function CharacterContainer({ charactersToDisplay }) {
  const charCard = charactersToDisplay.map((character) => {
    return (
      <Link
        to={`/characters/${character.id}`}
        style={{ textDecoration: "none" }}
      >
        <CharacterCard key={character.id} chars={character} />
      </Link>
    );
  });

  return <div className="card-container">{charCard}</div>;
}

export default CharacterContainer;
