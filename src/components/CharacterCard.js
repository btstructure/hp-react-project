import React, { useState } from "react";
import GryffindorLogo from "../images/gryffindor.png";
import HufflepuffLogo from "../images/hufflepuff.png";
import RavenclawLogo from "../images/ravenclaw.png";
import SlytherinLogo from "../images/slytherin.png";

function CharacterCard({ chars }) {
  const [likesCount, setLikesCount] = useState(0);
  const { character, hogwartsHouse, image } = chars;

  const houseIcons = {
    Slytherin: SlytherinLogo,
    Gryffindor: GryffindorLogo,
    Hufflepuff: HufflepuffLogo,
    Ravenclaw: RavenclawLogo,
  };

  const handleLikes = () => setLikesCount(likesCount + 1);

  const renderImage = () => {
    if (hogwartsHouse === "none") {
      return null;
    } else {
      return (
        <img
          className="house-icon"
          src={houseIcons[hogwartsHouse]}
          alt={hogwartsHouse}
          width="300"
          height="300"
        ></img>
      );
    }
  };

  return (
    <div className={`character house-${hogwartsHouse}`}>
      <img src={image} alt={character} width="250" height="350" />
      <h3 className="character-name"> Name : {character} </h3>
      <p className="character-house"> House: {hogwartsHouse}</p>
      <button className="likes" onClick={handleLikes}>
        👍 {likesCount}
      </button>
      {renderImage()}
    </div>
  );
}
export default CharacterCard;
