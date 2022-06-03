import React from "react";
import Image from "../../src/images/Hogwarts.webp";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title"> Welcome to the World of Harry Potter</h1>
      <p className="poem">
        {" "}
        You might belong in Gryffindor, <br></br>
        Where dwell the brave at heart, <br></br>
        Their daring, nerve, and chivalry, <br></br>
        Set Gryffindors apart; <br></br>
        You might belong in Hufflepuff, <br></br>
        Where they are just and loyal, <br></br>
        Those patient Hufflepuffs are true, <br></br>
        And unafraid of toil; <br></br>
        Or yet in wise old Ravenclaw, <br></br>
        If you've a ready mind, <br></br>
        Where those of wit and learning, <br></br>
        Will always find their kind; <br></br>
        Or perhaps in Slytherin, <br></br>
        You'll make your real friends, <br></br>
        These cunning folks use any means <br></br>
        To achieve their ends.
      </p>
      <img src={Image} alt="Hogwarts"></img>
    </div>
  );
}
export default Home;
