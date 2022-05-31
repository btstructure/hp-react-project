import React, { useState } from "react";

function NewCharacterForm({ handleAddNewCharacter }) {
  const [formData, setFormData] = useState({
    character: "",
    image: "",
    hogwartsHouse: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newCharacter) => handleAddNewCharacter(newCharacter))
      .then(setFormData({ character: "", image: "", hogwartsHouse: "" }))
  };
  // get info on how to do Drop Down selection in form
  // place between  character Name and onsubmit input field
  return (
    <div className="form" onSubmit={handleSubmit}>
      <h3>Add a character!</h3>
      <form>
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          value={formData.image}
        ></input>
        <input
          name="character"
          placeholder="Character Name"
          onChange={handleChange}
          value={formData.character}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewCharacterForm;
