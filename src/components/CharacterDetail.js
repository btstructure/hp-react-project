import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetail() {
  const [likes, setLikes] = useState(0);
  const [characters, setCharacter] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/characters/${id}`)
      .then((res) => res.json())
      .then((characters) => {
        setCharacter(characters);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { character, nickname, image, hogwartsHouse, description } = characters;

  function handleLikeClick() {
    setLikes((likes) => likes + 1);
  }
  return (
    <section>
      <div className="char-detail-box">
        <h2> Character </h2>
        <div className="character-image">
          <img src={image} alt={character} />
        </div>
        <button className="likes" onClick={handleLikeClick}>
          👍 {likes}
        </button>
        <div>
          <h4>{character}</h4>
          <p className="character-detail-box">
            {" "}
            House: {hogwartsHouse} <br></br>
            Nickname: {nickname} <br></br>
            About: {description}
          </p>
          <p> </p>
          <p> </p>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;
