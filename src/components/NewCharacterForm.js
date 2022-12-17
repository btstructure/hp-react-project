import React, { useState } from "react";

function NewCharacterForm({ handleAddNewCharacter }) {
  const [formData, setFormData] = useState({
    character: "",
    image: "",
    hogwartsHouse: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://hp-backend-json.onrender.com/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newCharacter) => handleAddNewCharacter(newCharacter))
      .then(
        setFormData({
          character: "",
          image: "",
          hogwartsHouse: "",
          description: "",
        })
      );
  };

  return (
    <div>
      <h1 className="addcharacter-page-header">Add a New Character!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label-name" htmlFor="name">
          Name
        </label>
        <input
          name="character"
          placeholder="Character Name"
          onChange={handleChange}
          value={formData.character}
        ></input>
        <label className="label-image" htmlFor="Image">
          Image
        </label>
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          value={formData.image}
        ></input>
        <label className="label-house" htmlFor="house">
          House
        </label>
        <select
          onChange={handleChange}
          name="hogwartsHouse"
          value={formData.hogwartsHouse}
        >
          <option value="">Select a House</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="None">None</option>
        </select>
        <label className="label-description" htmlFor="description">
          About
        </label>
        <textarea
          onChange={handleChange}
          name="description"
          value={formData.description}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewCharacterForm;
