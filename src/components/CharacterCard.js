import React from "react";

function CharacterCard({ chars }) {
  const { character, hogwartsHouse, image } = chars;

  return (
    <div className="character">
      <img src={image} alt={character} />
      <h3 className="char-details">Name : {character}</h3>
      <h4 className="character-house">House: {hogwartsHouse}</h4>
    </div>
  );
}
export default CharacterCard;
